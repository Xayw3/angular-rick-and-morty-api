import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LocationApi } from "../models/locations.model";

@Injectable({
  providedIn: 'root',
})

export class locationsService {
  baseUrl = 'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient){}

  getLocations(name: string, dimension: string): Observable<LocationApi>{
    return this.http.get<LocationApi>(`${this.baseUrl}?name=${name}&dimension=${dimension}`)
  };

  getLocationsById(id: string): Observable<LocationApi> {
    return this.http.get<LocationApi>(`${this.baseUrl}/${id}`)
  }
}