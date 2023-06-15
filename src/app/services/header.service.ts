import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Logo } from '../models/logo';
import { Links } from '../models/links';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private APIUrl = environment.APIUrl;
  private LogoEndpoint = environment.LogoEndpoint;
  private LinksEndpoint = environment.LinksEndpoint;

  constructor(private http: HttpClient) {}

  public getLogoData() {
    console.log('servicio');
    return this.http.get<Logo[]>(this.APIUrl + this.LogoEndpoint);
  }

  public getLinks() {
    return this.http.get<Links[]>(this.APIUrl + this.LinksEndpoint);
  }

  public sendLogoData(logoData: Logo) {
    return this.http.put(this.APIUrl + this.LogoEndpoint + '/15', logoData);
  }
  public createLink(link: Links) {
    return this.http.post(this.APIUrl + this.LinksEndpoint, link);
  }
}
