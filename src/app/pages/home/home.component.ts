import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Main } from 'src/app/models/main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  mainDataArray!: Main[];
  mainTitle!: string;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getHomeData();
  }

  getHomeData(): void {
    this.homeService.getHomeData().subscribe((data: Main[]) => {
      this.mainDataArray = data as Main[];
      this.mainTitle = this.mainDataArray[0].title1;
    });
  }
}
