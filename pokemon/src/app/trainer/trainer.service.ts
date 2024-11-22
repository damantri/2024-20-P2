import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private baseUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon';

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trainers.json`);
  }

  getTrainerById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/trainers.json`);
  }
}

