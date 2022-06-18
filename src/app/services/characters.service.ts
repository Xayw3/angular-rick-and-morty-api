import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CharacterApi } from "../models/characters.model";

@Injectable({
  providedIn: 'root',
})

export class charactersService {
  baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient){}

  getCharacters(name: string, gender: string, page: string): Observable<CharacterApi> {
    return this.http.get<CharacterApi>(`${this.baseUrl}?name=${name}&gender=${gender}&page=${page}`);
  };

  getCharactersById(id?: string): Observable<CharacterApi> {
    return this.http.get<CharacterApi>(`${this.baseUrl}/${id}`);
  }
}