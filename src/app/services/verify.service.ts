import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
 
@Injectable({providedIn:'root'})
export class VerifyService {
 
  baseURL: string = "https://1faf-45-5-68-30.sa.ngrok.io";
  private response: any;
 
  constructor(private http: HttpClient) { }

  login(username:string, password:string): Observable<any> {
    return this.http.post<any>(this.baseURL, {username , password})
  }
 
  setReponse(response: any) {
    this.response = response;
  }

  getResponse(): any {
    return this.response;
  }
}