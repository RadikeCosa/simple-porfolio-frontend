import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { Main } from 'src/app/models/main';

@Component({
  selector: 'app-home-main-form',
  templateUrl: './home-main-form.component.html',
  styleUrls: ['./home-main-form.component.css'],
})
export class HomeMainFormComponent implements OnInit {
  public homeForm!: FormGroup;
  public mainData: Main[] = []; // Variable para almacenar los datos recibidos del backend

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.getHomeData(); // Obtener los datos del backend al inicializar el componente
  }

  initializeForm() {
    this.homeForm = this.formBuilder.group({
      title1: '',
      title2: '',
      title3: '',
      image: '',
      icon: '',
    });
  }

  getHomeData() {
    this.homeService.getHomeData().subscribe(
      (respuesta) => {
        if (respuesta.length > 0) {
          this.mainData = respuesta as Main[]; // Asignar los datos recibidos a la variable mainData
        }
      },
      (error) => {
        console.log('error retrieving home data', error);
      }
    );
  }

  createHomeData() {
    if (this.homeForm.valid) {
      const homeData: Main = this.homeForm.value;
      this.homeService.createHomeData(homeData).subscribe(
        (response) => {
          console.log('home data sent successfully');
        },
        (error) => {
          console.log('error sending home data', error);
        }
      );
    }
  }

  updateHomeData() {
    if (this.homeForm.valid) {
      const homeData: Main = this.homeForm.value;
      this.homeService.updateHomeData(homeData).subscribe(
        (response) => {
          console.log('home data sent successfully');
        },
        (error) => {
          console.log('error sending home data', error);
        }
      );
    }
  }
}
