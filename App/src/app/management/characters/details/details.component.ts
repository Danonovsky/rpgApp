import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ItemService } from '../../items/item.service';
import { ItemResponse } from '../../items/items.models';
import { CharacterResponse } from '../character.models';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() character?: CharacterResponse
  @Output() onUpdate = new EventEmitter();

  campaignId: string = '';
  itemId: string = '';
  items: ItemResponse[] = [];
  availableItems: ItemResponse[] = [];

  constructor(
    private itemService: ItemService,
    private characterService: CharactersService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('campaignId');
    if(id) {
      this.campaignId = id;
    }
  }

  selectItem(id: any) {
    if(id != null)
    this.itemId = id;
  }

  onUpload(event: string) {
    this.character!.url = event;
    this.onUpdate.emit();
  }

  add() {
    if(this.itemId) {
      this.itemService.assignToCharacter({
        characterId: this.character!.id,
        itemId: this.itemId
      }).subscribe(_ => {
        this.toastr.info('Item added.');
        this.refreshItems();
      });
    }
  }

  refreshItems() {
    this.itemId = '';
    this.characterService.getAllItems(this.character!.id).subscribe(_ => {
      this.items = _.body!;
      console.log(this.items);
    });
    this.itemService.getAvailable(this.campaignId).subscribe(_ => {
      this.availableItems = _.body!;
      console.log(this.availableItems);
    });
  }

  remove(id: string) {
    this.itemService.remove(id).subscribe(_ => {
      this.toastr.info('Item removed');
      this.refreshItems();
    });
  }
}
