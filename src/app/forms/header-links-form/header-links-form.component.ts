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
  public links: Links[] = [];
  public selectedLink: Links | null = null; // Variable para almacenar el enlace seleccionado

  constructor(
    private formBuilder: FormBuilder,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this.linksForm = this.formBuilder.group({
      title: '',
      route: '',
    });

    this.headerService.getLinks().subscribe(
      (links) => {
        this.links = links;
      },
      (error) => {
        console.log('Error retrieving links', error);
      }
    );
  }

  selectLink(link: Links) {
    this.selectedLink = link; // Asignar el enlace seleccionado a la variable
  }

  deleteLink() {
    if (!this.selectedLink) {
      return;
    }
    const linkId = this.selectedLink.id;

    this.headerService.deleteLink(linkId).subscribe(
      () => {
        console.log('enlace eliminadado');
        this.selectedLink = null;
        this.headerService.getLinks().subscribe(
          (links) => {
            this.links = links;
          },
          (error) => {
            console.log('error retrieving links', error);
          }
        );
      },
      (error) => {
        console.log('error deleting link');
      }
    );
  }

  createLink() {
    // Obtener los valores del formulario
    const { title, route } = this.linksForm.value;

    // Crear un objeto Links con los valores del formulario
    const newLink: Links = {
      id: 0, // Asigna un valor adecuado para el nuevo enlace
      title: title,
      route: route,
    };

    // Llamar al servicio para crear el enlace
    this.headerService.createLink(newLink).subscribe(
      () => {
        console.log('Enlace creado');
        this.linksForm.reset(); // Restablecer el formulario
        this.headerService.getLinks().subscribe(
          (links) => {
            this.links = links;
          },
          (error) => {
            console.log('Error al obtener los enlaces', error);
          }
        );
      },
      (error) => {
        console.log('Error al crear el enlace', error);
      }
    );
  }
  cancelSelection() {
    this.selectedLink = null; // Reinicia la variable del enlace seleccionado
    this.linksForm.reset(); // Reinicia el formulario
  }

  updateLink() {}
}
