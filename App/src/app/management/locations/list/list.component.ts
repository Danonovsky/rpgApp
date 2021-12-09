import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private locationsService: LocationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('campaignId');
    if(id) {
      this.campaignId = id;
      this.refresh();
    }
  }

  refresh() {
    this.locationsService.getAll(this.campaignId).subscribe(_ => {
      this.locations = _.body!;
      console.log(this.locations);
    });
  }

  loadDetails(id: string) {
    //
  }

  delete(id: string) {
    //
  }

}
