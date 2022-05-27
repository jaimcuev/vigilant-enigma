import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    console.log(user);
    // Verify URI
    return this.http.post(``, {
      user: user,
    });
  }
}
