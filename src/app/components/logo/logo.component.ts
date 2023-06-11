import { Component, Input } from '@angular/core';
import { Logo } from 'src/app/models/logo';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent {
  @Input() data!: Logo;
}
