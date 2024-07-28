import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Profile {
  id?: number;
  nickname: string;
  photo: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getProfile(id: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.apiUrl, profile).pipe(
      catchError(this.handleError)
    );
  }

  updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiUrl}/${profile.id}`, profile).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Log the error or display it to the user as needed
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
