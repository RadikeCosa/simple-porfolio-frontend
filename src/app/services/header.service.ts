import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private APIUrl = environment.APIUrl;
  private LogoEndpoint = environment.LogoEndpoint;
  private LinksEndpoint = environment.LinksEndpoint;

  constructor(private http: HttpClient) {}

  public getLogoData() {
    return this.http.get(this.APIUrl + '/logo');
  }

  public getLinks() {
    return this.http.get('http://localhost:3000/links');
  }
}
