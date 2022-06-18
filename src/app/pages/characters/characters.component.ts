import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character, CharacterApiInfo } from 'src/app/models/characters.model';
import { charactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character | any = [];
  charactersSubscription: Subscription | undefined;
  pages: CharacterApiInfo | any = [];

  nameParam: string = "";
  genderParam: string = "";
  inputValue: string = "";
  page: string = "";

  constructor(private charactersService: charactersService) { }

  getData(): void {
    this.charactersSubscription = this.charactersService.getCharacters(this.nameParam, this.genderParam, this.page).subscribe((characters) => {
      const chars: Character | any = characters.results;  
      this.characters = chars.map((character: Character) => {
        character.location.url = character.location.url.replace(/[^\d]/g, '');
        character.origin.url = character.origin.url.replace(/[^\d]/g, '');
        return character;
      });
      });   
  };

  getPages(): void {
    this.charactersSubscription = this.charactersService.getCharacters(this.nameParam, this.genderParam, this.page).subscribe((characters) => {
      for (let i = 1; i <= characters.info.pages; i += 1) {
        this.pages.push(i.toString())
      };
    });
  }

  ngOnInit(): void {
    this.getData();
    this.getPages();
  };
  

  changePage(i: number): void {
    this.page = String(i + 1);
    this.getData();
  };

  changeNameParam(): void {
    this.nameParam = this.inputValue;
    this.getData();
    this.inputValue = "";
  };

  changeGenderParam(): void {
    this.getData();
  };

  getLocationId(str: string) {
    return str.replace(/[^\d]/g, '');
  }
}