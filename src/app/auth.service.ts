import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://freeapi.miniprojectideas.com/api/User/Login';

  constructor(private http: HttpClient) {}

  login(emailId: string, password: string): Observable<any> {
    const body = { emailId, password };
    return this.http.post<any>(this.loginUrl, body);
  }
}
