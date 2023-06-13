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
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderLinksFormComponent } from './forms/header-links-form/header-links-form.component';
import { HeaderLogoFormComponent } from './forms/header-logo-form/header-logo-form.component';
import { HomeMainFormComponent } from './forms/home-main-form/home-main-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const Components = [
  AppComponent,
  HomeComponent,
  HeaderComponent,
  PorfolioComponent,
  SkillsComponent,
  PageNotFoundComponent,
  MainComponent,
  LogoComponent,
  LinksComponent,
  DashboardComponent,
  HeaderLinksFormComponent,
  HeaderLogoFormComponent,
  HomeMainFormComponent,
];
@NgModule({
  declarations: [Components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
