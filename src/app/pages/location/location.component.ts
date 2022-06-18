import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { locationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations: Location | any = [];
  locationsSubscription: Subscription | undefined;

  id: string | any;

  constructor(private locationsService: locationsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.locationsSubscription = this.locationsService.getLocationsById(this.id).subscribe((locations) => {
      if (Array.isArray(locations) === false) {
        return this.locations.push(locations);
      } return this.locations = locations;
    });
  };

}
