import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PorfolioComponent } from './pages/porfolio/porfolio.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';
import { LogoComponent } from './components/logo/logo.component';
import { LinksComponent } from './components/links/links.component';

const Components = [
  AppComponent,
  HomeComponent,
  HeaderComponent,
  PorfolioComponent,
  SkillsComponent,
  PageNotFoundComponent,
];
@NgModule({
  declarations: [Components, MainComponent, LogoComponent, LinksComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
