import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeaderService } from '../../services/header.service';
import { Logo } from 'src/app/models/logo';

@Component({
  selector: 'app-header-logo-form',
  templateUrl: './header-logo-form.component.html',
  styleUrls: ['./header-logo-form.component.css'],
})
export class HeaderLogoFormComponent implements OnInit {
  public logoForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.logoForm = this.formBuilder.group({
      name: '',
      lastName: '',
      title: '',
      image: '',
      logo: '',
    });
  }

  sendLogoData() {
    const logoData: Logo = this.logoForm.value;
    this.headerService.sendLogoData(logoData).subscribe(
      (response) => {
        // Handle success response
        console.log('Logo data sent successfully.');
      },
      (error) => {
        // Handle error response
        console.error('Error sending logo data:', error);
      }
    );
  }
}
