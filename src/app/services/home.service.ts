import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Main } from '../models/main';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private homeDataUrl = 'http://localhost:3000/home';
  constructor(private http: HttpClient) {}
  public getHomeData() {
    return this.http.get<Main[]>(this.homeDataUrl);
  }
}
