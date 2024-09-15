import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-work-display',
  templateUrl: './work-display.component.html',
  styleUrls: ['./work-display.component.sass']
})
export class WorkDisplayComponent implements OnInit {
  public username = 'amandaalliegro'; // Replace with your GitHub username
  public totalCommits: number = 2253; // Base number of commits
  public totalAdded: number = 110090; // Base number of lines added
  public totalDeleted: number = -97221; // Base number of lines deleted
  public errorMessage: string = '';

  public animatedCommits: number = 0;  // For animated display
  public animatedAdded: number = 0;    // For animated display
  public animatedDeleted: number = 0;  // For animated display

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.fetchTotalCommits();
    this.fetchTotalCodeStats();
  }

  // Fetch total commits
  fetchTotalCommits(): void {
    this.githubService.getTotalCommitCount(this.username).subscribe(
      (commits: number) => {
        this.totalCommits += commits; // Add fetched commits to base value 2253
        this.animateNumbers('commits', this.totalCommits); // Animate the total commits
      },
      (error: any) => {
        this.errorMessage = 'Error fetching commit data';
      }
    );
  }

  // Fetch total lines added and deleted
  fetchTotalCodeStats(): void {
    this.githubService.getTotalCodeStats(this.username).subscribe(
      (data) => {
        this.totalAdded += data.totalAdded; // Add the fetched added lines to the base value
        this.totalDeleted += data.totalDeleted; // Add the fetched deleted lines to the base value
        this.animateNumbers('added', this.totalAdded);   // Animate added lines
        this.animateNumbers('deleted', this.totalDeleted); // Animate deleted lines (negative)
      },
      (error) => {
        console.error('Error fetching total code stats:', error);
      }
    );
  }

  // Helper method to animate numbers from 0 to the final value
  animateNumbers(type: string, finalValue: number): void {
    let startValue = 0;
    const duration = 2000;  // Duration of the animation in ms
    const stepTime = Math.max(50, Math.floor(duration / Math.abs(finalValue))); // Ensure stepTime isn't too short

    // If the value is negative, we should decrement instead of incrementing
    const increment = finalValue > 0
      ? Math.max(1, Math.floor(finalValue / (duration / stepTime)))
      : Math.max(1, Math.floor(Math.abs(finalValue) / (duration / stepTime))) * -1; // Handle decrement for negative values

    const updateFunction = () => {
      startValue += increment;

      if ((increment > 0 && startValue >= finalValue) || (increment < 0 && startValue <= finalValue)) {
        startValue = finalValue; // Ensure we reach the final value exactly
        this.updateAnimatedValue(type, startValue);
        clearInterval(animation); // Stop the animation
      } else {
        this.updateAnimatedValue(type, startValue);
      }
    };

    const animation = setInterval(updateFunction, stepTime);
  }

  // Helper to update the right animated value
  updateAnimatedValue(type: string, value: number): void {
    if (type === 'commits') {
      this.animatedCommits = value;
    } else if (type === 'added') {
      this.animatedAdded = value;
    } else if (type === 'deleted') {
      this.animatedDeleted = value;
    }
  }
}
