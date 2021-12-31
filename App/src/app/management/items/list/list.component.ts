import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from '../item.service';
import { ItemResponse } from '../items.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: ItemResponse[] = [];
  campaignId: string = '';
  item?: ItemResponse;

  constructor(
    private itemService: ItemService,
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
    this.itemService.getAll(this.campaignId).subscribe(_ => {
      this.items = _.body!;
    });
  }

  loadDetails(id: string) {
    this.itemService.get(id).subscribe(_ => {
      this.item = _.body!;
    });
  }

  delete(id: string) {
    this.itemService.delete(id).subscribe(_ => {
      //
      this.toastr.info('Item deleted.');
      this.refresh();
    }, _ => {
      this.toastr.error('An error occured');
    })
  }

}
