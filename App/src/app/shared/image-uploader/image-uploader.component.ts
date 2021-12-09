import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SetImageUrlResponse } from 'src/app/campaign/campaign.models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  @Output() 
  onUpload = new EventEmitter();
  @Input() 
  name: string = '';
  @Input() 
  id: string = '';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  changeUrl(event: Event) {
    var files = (event.currentTarget as HTMLInputElement).files;
    if(files && files?.length>0) {
      var newFile = files.item(0);
      if(newFile) {
        var formData = new FormData();
        formData.append('file',newFile, newFile.name);
        this.http.patch<SetImageUrlResponse>(`${environment.api}${this.name}/Img/${this.id}`, formData, { observe: 'response' }).subscribe(_ => {
          if(_.body) {
            this.onUpload.emit(_.body.url);
            this.toastr.info('Saved changes.');
          } else {
            this.toastr.error('An error occured.');
          }
        }, _ => {
          this.toastr.error(_.statusText);
        });
      }
    }
  }

}