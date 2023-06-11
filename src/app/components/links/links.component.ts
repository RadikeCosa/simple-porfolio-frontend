import { Component, Input } from '@angular/core';
import { Links } from 'src/app/models/links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent {
  @Input() data!: Links[];
}
