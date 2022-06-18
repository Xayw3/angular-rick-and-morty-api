import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/models/characters.model';
import { charactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Character | any = [];
  charactersSubscription: Subscription | undefined;

  id: string | any;

  constructor(private charactersService: charactersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.charactersSubscription = this.charactersService.getCharactersById(this.id).subscribe((characters) => {
      if (Array.isArray(characters) === false) {
        return this.characters.push(characters);
      } return this.characters = characters;
    });
  };
}
