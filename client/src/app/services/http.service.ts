import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  getSecured(url): Observable<any> {
    return this.httpClient.get(url);
  }

  postSecured(url, payload): Observable<any> {
    return this.httpClient.post(url, payload);
  }

}
