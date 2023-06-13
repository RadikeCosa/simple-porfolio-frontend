import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private APIUrl = environment.APIUrl;
  private LogoEndpoint = environment.LogoEndpoint;
  private LinksEndpoint = environment.LinksEndpoint;

  constructor(private http: HttpClient) {}

  public getLogoData() {
    return this.http.get(
      'https://backend-porfolio-1am7.onrender.com/porfolio-service/logo/'
    );
  }

  public getLinks() {
    return this.http.get(
      'https://backend-porfolio-1am7.onrender.com/porfolio-service/links/'
    );
  }

  public sendLogoData(logoData: any) {
    return this.http.put(
      'https://backend-porfolio-1am7.onrender.com/porfolio-service/logo/1',
      logoData
    );
  }
}
