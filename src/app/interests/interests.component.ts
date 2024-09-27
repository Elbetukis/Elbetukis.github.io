import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class InterestsComponent {
  interestsList = [
    'Programming',
    'Reading',
    'Traveling',
    'Gaming',
    'Cooking'
  ];
}
