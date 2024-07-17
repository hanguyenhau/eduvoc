import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderHomeComponent } from './pages/header-home/header-home.component';
import { HomeComponent } from './home.component';
import { SearchToggleComponent } from './components/search-toggle/search-toggle.component';


@NgModule({
  declarations: [
    HeaderHomeComponent,
    HomeComponent,
    SearchToggleComponent
  ],
  exports: [
    HeaderHomeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
