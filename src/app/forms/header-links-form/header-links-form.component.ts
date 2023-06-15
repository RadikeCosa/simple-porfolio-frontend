import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeaderService } from '../../services/header.service';
import { Links } from 'src/app/models/links';

@Component({
  selector: 'app-header-links-form',
  templateUrl: './header-links-form.component.html',
  styleUrls: ['./header-links-form.component.css'],
})
export class HeaderLinksFormComponent implements OnInit {
  public linksForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this.linksForm = this.formBuilder.group({
      title: '',
      route: '',
    });
  }
  createLink() {
    const createLink: Links = this.linksForm.value;
    this.headerService.createLink(createLink).subscribe(
      (response) => {
        console.log('link created');
      },

      (error) => {
        console.log('error sending data', error);
      }
    );
  }
}
