import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from 'src/app/campaign/campaign.service';
import { Characteristic, CharacterRollRequest, Skill } from '../character.models';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() campaignId: string = '';
  system: string = '';
  races: string[] = [];
  characteristics: Characteristic[] = [];
  skills: Skill[] = [];
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private charactersService: CharactersService,
    private campaignService: CampaignService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      race: ['', Validators.required]
    });
    this.campaignService.get(this.campaignId).subscribe(_ => {
      this.system = _.body?.system!;
      this.getRaces();
    });
  }

  getRaces() {
    this.charactersService.getRaces(this.system).subscribe(_ => {
      this.races = _.body!;
      console.log(this.races);
    });
  }

  rollCharacter() {
    if (this.form.value['race']) {
      this.charactersService.rollCharacter({ race: this.form.value['race'], systemName: this.system }).subscribe(_ => {
        this.characteristics = _.body?.characteristics!;
        this.skills = _.body?.skills!;
      });
    } else {
      this.toastr.error('You need to select race!');
    }
  }

  onSubmit() {
    if (!this.form.valid) {
      this.toastr.error('Invalid input', 'Error');
    } else {
      this.charactersService.addCharacter({
        character: {
          characteristics: this.characteristics,
          firstName: this.form.value['firstName'],
          lastName: this.form.value['lastName'],
          race: {
            name: this.form.value['race']
          },
          skills: this.skills
        },
        campaignId: this.campaignId
      }).subscribe(_ => {
        this.toastr.success('Character added', 'Success');
      }, _ => {
        this.toastr.error('An error occured.');
      });
    }
  }

  reset() {
    this.characteristics = [];
    this.skills = [];
  }

}
