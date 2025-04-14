import { Component, OnInit } from '@angular/core';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { RickMortyApiService } from '../../services/ricknmortyapi.service';
import { Character } from '../../interfaces/character';
import { ApiResponse } from '../../interfaces/api-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters-table',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css']
})
export class CharactersTableComponent implements OnInit {
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;
  characters: Character[] = [];

  constructor(private api: RickMortyApiService) {}

  ngOnInit(): void {
    this.fetchNextPage(); // Cargar primera página al iniciar
  }

  fetchNextPage(): void {
    this.api.getNextPage().subscribe((response: ApiResponse) => {
      this.characters = response.results;
      this.hasNextPage = response.info.next !== null;
      this.hasPreviousPage = response.info.prev !== null;
      this.api.setPagination(response.info);
    });
  }

  fetchPreviousPage(): void {
    this.api.getPreviousPage().subscribe((response: ApiResponse) => {
      this.characters = response.results;
      this.hasNextPage = response.info.next !== null;
      this.hasPreviousPage = response.info.prev !== null;
      this.api.setPagination(response.info);
    });
  }
}
