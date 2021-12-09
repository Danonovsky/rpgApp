import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocationResponse } from '../locations.models';
import { LocationService } from '../locations.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  locations: LocationResponse[] = [];
  campaignId: string = '';
  location?: LocationResponse;

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('campaignId');
    if(id) {
      this.campaignId = id;
      this.refresh();
    }
  }

  refresh() {
    this.locationService.getAll(this.campaignId).subscribe(_ => {
      this.locations = _.body!;
      console.log(this.locations);
    });
  }

  loadDetails(id: string) {
    //
    this.locationService.get(id).subscribe(_ => {
      this.location = _.body!;
    });
  }

  delete(id: string) {
    this.locationService.delete(id).subscribe(_ => {
      //
      this.toastr.info('Location deleted.');
      this.refresh();
    }, _ => {
      this.toastr.error('An error occured');
    })
  }

}
