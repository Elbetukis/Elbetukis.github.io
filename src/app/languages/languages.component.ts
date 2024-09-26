import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  standalone: true,
  imports: [CommonModule]  // Importa CommonModule para usar *ngFor
})
export class LanguagesComponent {
  languagesList = [
    { name: 'English', level: 'Advanced' },
    { name: 'Spanish', level: 'Native' },
    { name: 'French', level: 'Intermediate' }
  ];
}
