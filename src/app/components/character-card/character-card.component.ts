import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input() character: Character ={
    id: 0,
    name: "",
    status: "",
    species: "",
    image: ""};
}
