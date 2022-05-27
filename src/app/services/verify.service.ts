import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
@Injectable({providedIn:'root'})
export class VerifyService {
  baseURL: string = "https://1faf-45-5-68-30.sa.ngrok.io";

  private responseSource = new BehaviorSubject<any>({});
  public response = this.responseSource.asObservable();
 
  constructor(private http: HttpClient, private router: Router) {
    this.responseSource.next(this.getInitialSession());
  }

  public login(username:string, password:string) {
    this.requestLogin(username, password).subscribe((response: any) => {
      this.responseSource.next(response);
      localStorage.setItem('token', JSON.stringify(response));
    });
  }

  public isLogged(): boolean {
    const response = this.responseSource.value;
    return response.access_token ? true : false;
  }

  private getInitialSession(): any {
    const session = localStorage.getItem('token');
    return session ? JSON.parse(session) : {};
  }

  public temporizadorDeSesion() {
    setTimeout(() => {
      this.logout();
    }, 1000 * this.responseSource.value.expires_in);
  };

  private logout(): void {
    this.responseSource.next({});
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  private requestLogin(username:string, password:string): Observable<any> {
    return this.http.post<any>(this.baseURL, {username , password})
    .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse): any {
		return throwError('Something bad happened; please try again later.');
	}
}