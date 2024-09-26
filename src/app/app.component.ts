import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { InterestsComponent } from './interests/interests.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SkillsComponent } from './skills/skills.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Agrega esta línea para que el componente sea standalone
  imports: [
    CommonModule, // Asegúrate de incluir CommonModule aquí
    HeaderComponent,
    WorkExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    InterestsComponent,
    AchievementsComponent,
    SkillsComponent
  ]
})
export class AppComponent {
  title = 'mycv';
}
