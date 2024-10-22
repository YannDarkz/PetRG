import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://186.247.89.58:8080/api/user/create/user';

  constructor( private http: HttpClient) { }

  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData)
  }
}
