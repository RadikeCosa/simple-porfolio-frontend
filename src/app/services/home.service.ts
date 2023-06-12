import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Main } from '../models/main';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private APIUrl = environment.APIUrl;
  constructor(private http: HttpClient) {}
  public getHomeData() {
    return this.http.get<Main[]>('http://localhost:3000/home');
  }
}
