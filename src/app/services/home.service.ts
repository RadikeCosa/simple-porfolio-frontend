import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Main[]>(this.APIUrl + this.HomeEndpoint);
  }
}
