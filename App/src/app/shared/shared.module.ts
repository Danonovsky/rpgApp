import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MNavbarComponent } from './m-navbar/m-navbar.component';
import { SystemPickerComponent } from './system-picker/system-picker.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MNavbarComponent,
    SystemPickerComponent
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
