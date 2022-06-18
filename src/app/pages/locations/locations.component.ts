import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/models/characters.model';
import { charactersService } from 'src/app/services/characters.service';
import { locationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations: Location | any = [];
  locationsSubscription: Subscription | undefined;
  charactersSubscription: Subscription | undefined;
  characters: Character | any = [];

  nameParam: string = "";
  dimensionParam: string = "";
  characterName: string = "";

  constructor(private locationsService: locationsService, private charactersService: charactersService) { }

  getData(): void {
    this.locationsSubscription = this.locationsService.getLocations(this.nameParam, this.dimensionParam).subscribe((locations) => {
      this.locations = locations.results
    });
  };

  ngOnInit(): void {
    this.getData();

  };

  changeParams(): void {
    this.getData();
    this.nameParam = "";
    this.dimensionParam = "";
  };

}
