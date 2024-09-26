import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsList: Array<{ name: string, level: string }> = [];

  ngOnInit(): void {
    this.skillsList = [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'Angular', level: 'Intermediate' },
      { name: 'HTML & CSS', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
    ];
  }
}
