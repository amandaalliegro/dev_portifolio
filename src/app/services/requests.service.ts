import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Requests {
  private apiUrl = 'https://portifolio-backend-aubu.onrender.com';

  private apiUrlEmail = 'https://portifolio-backend-aubu.onrender.com/api/send-message';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  sendMessage(data: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(this.apiUrlEmail, data);
  }
}
