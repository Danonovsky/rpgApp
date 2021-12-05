import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MNavbarComponent } from './m-navbar/m-navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    MNavbarComponent
  ]
})
export class SharedModule { }
