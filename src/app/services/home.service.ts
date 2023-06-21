import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Main } from '../models/main';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private APIUrl = environment.APIUrl;
  private HomeEndpoint = environment.HomeEndpoint;

  constructor(private http: HttpClient) {}

  public getHomeData() {
    return this.http.get<Main[]>(`${this.APIUrl}${this.HomeEndpoint}`);
  }

  public createHomeData(main: Main) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.APIUrl}${this.HomeEndpoint}`, main, {
      headers,
    });
  }
  public updateHomeData(main: Main) {
    return this.http.put(`${this.APIUrl}${this.HomeEndpoint + '26'}`, main);
  }
}
