import { Component, Input } from '@angular/core';
import { Logo } from 'src/app/models/logo';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent {
  @Input() name!: string;
  @Input() lastName!: string;
  @Input() title!: string;
}
