import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, forkJoin } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private githubApiUrl = 'https://api.github.com';
  private token = environment.githubToken; // Replace with your GitHub token

  constructor(private http: HttpClient) {}

  // Set up headers for GitHub API requests
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `token ${this.token}`,
      'Content-Type': 'application/json',
    });
  }

  // Fetch list of repositories for a given GitHub username
  getUserRepos(username: string): Observable<any[]> {
    const url = `${this.githubApiUrl}/users/${username}/repos`;
    return this.http.get<any[]>(url, { headers: this.getHeaders() }).pipe(
      catchError((error) => {
        console.error('Error fetching repositories:', error);
        return throwError(error);
      })
    );
  }

  // Fetch the total number of commits for a specific repository
  getRepoCommitCount(username: string, repoName: string): Observable<number> {
    const url = `${this.githubApiUrl}/repos/${username}/${repoName}/commits`;

    return this.http.get<any[]>(url, { headers: this.getHeaders() }).pipe(
      map((commits: any[]) => commits.length),
      catchError((error) => {
        if (error.status === 409) {
          // Handle 409 Conflict (likely empty repository)
          console.warn(`Repository ${repoName} is empty or has no commits.`);
          return of(0);  // Return 0 commits for this repository
        }
        // Re-throw other errors
        return throwError(error);
      })
    );
  }

  // Fetch the total number of commits across all repos
  getTotalCommitCount(username: string): Observable<number> {
    return this.getUserRepos(username).pipe(
      mergeMap((repos) => {
        const observables = repos.map((repo) => this.getRepoCommitCount(username, repo.name));
        return forkJoin(observables);
      }),
      map((commitCounts: number[]) => commitCounts.reduce((acc, commits) => acc + commits, 0)),
      catchError((error) => {
        console.error('Error fetching total commit count:', error);
        return throwError(error);
      })
    );
  }

  // Fetch code frequency (lines added and deleted) for a specific repository
  getRepoCodeFrequency(username: string, repoName: string): Observable<{added: number, deleted: number}> {
    const url = `${this.githubApiUrl}/repos/${username}/${repoName}/stats/code_frequency`;

    return this.http.get<any[]>(url, { headers: this.getHeaders() }).pipe(
      map((weeklyData: any[]) => {
        let totalAdded = 0;
        let totalDeleted = 0;

        // Iterate through the weekly data to sum up additions and deletions
        weeklyData.forEach(week => {
          totalAdded += week[1];  // Lines added
          totalDeleted += week[2]; // Lines deleted
        });

        return { added: totalAdded, deleted: totalDeleted };
      }),
      catchError((error) => {
        console.error('Error fetching code frequency:', error);
        return of({ added: 0, deleted: 0 });
      })
    );
  }

  // Fetch summed total code frequency across all repositories
  getTotalCodeStats(username: string): Observable<{totalAdded: number, totalDeleted: number}> {
    return this.getUserRepos(username).pipe(
      mergeMap(repos => {
        // Create an array of observables for each repository's code frequency
        const repoStatsRequests = repos.map(repo => this.getRepoCodeFrequency(username, repo.name));
        return forkJoin(repoStatsRequests);
      }),
      map((repoStats: {added: number, deleted: number}[]) => {
        // Summing up added and deleted lines across all repositories
        let totalAdded = 0;
        let totalDeleted = 0;

        repoStats.forEach(stats => {
          totalAdded += stats.added;
          totalDeleted += stats.deleted;
        });

        return { totalAdded, totalDeleted };
      }),
      catchError((error) => {
        console.error('Error fetching total code stats:', error);
        return throwError(error);
      })
    );
  }
}
