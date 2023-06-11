import { Component } from '@angular/core';
import { Links } from 'src/app/models/links';
import { Logo } from 'src/app/models/logo';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logo: Logo = { name: '', title: '' };
  logoName!: string;
  logoTitle!: string;

  links: Links[] = [];

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.logoData();
    this.linksData();
  }

  public logoData() {
    this.headerService.getLogoData().subscribe((respuesta) => {
      this.logo = respuesta as Logo;
    });
  }

  public linksData() {
    this.headerService.getLinks().subscribe((respuesta) => {
      this.links = respuesta as Links[];
    });
  }
}
