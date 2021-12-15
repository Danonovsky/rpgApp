import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MNavbarComponent } from './m-navbar/m-navbar.component';
import { SystemPickerComponent } from './system-picker/system-picker.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { UrlPipe } from './pipes/url.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    MNavbarComponent,
    SystemPickerComponent,
    ImageUploaderComponent,
    UrlPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    MNavbarComponent,
    ImageUploaderComponent,
    UrlPipe
  ]
})
export class SharedModule { }
