import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PorfolioComponent } from './pages/porfolio/porfolio.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderLogoFormComponent } from './forms/header-logo-form/header-logo-form.component';
import { HeaderLinksFormComponent } from './forms/header-links-form/header-links-form.component';
import { HomeMainFormComponent } from './forms/home-main-form/home-main-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'porfolio',
    component: PorfolioComponent,
  },
  { path: 'dash', component: DashboardComponent },
  {
    path: 'logoform',
    component: HeaderLogoFormComponent,
  },
  {
    path: 'linkform',
    component: HeaderLinksFormComponent,
  },
  {
    path: 'homeform',
    component: HomeMainFormComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
