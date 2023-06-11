import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private http: HttpClient) {}

  public getLogoData() {
    return this.http.get('http://localhost:3000/logo');
  }

  public getLinks() {
    return this.http.get('http://localhost:3000/links');
  }
}
