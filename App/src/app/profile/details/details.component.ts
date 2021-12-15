import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PublicUserResponse } from '../profile.models';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user?: PublicUserResponse;
  id: string = '';
  isOwner: boolean = false;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(_ => {
      this.id = _.id;
      if(!this.id) {
        this.router.navigate(["/"]);
      }
      this.refresh();
    });
    
  }

  refresh() {
    this.profileService.get(this.id).subscribe(_ => {
      this.user = _.body!;
      this.isOwner = this.profileService.isOwner(this.user.id);
    }, _ => {
      this.toastr.error('User not found');
      this.router.navigate(["/"]);
    });
  }

  onUpload(event: string) {
    this.user!.url = event;
  }

}
