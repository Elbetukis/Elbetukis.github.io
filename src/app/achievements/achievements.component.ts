import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa el CommonModule

@Component({
  selector: 'app-achievements',
  standalone: true, // Es un componente standalone
  imports: [CommonModule], // Asegúrate de importar el CommonModule
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievements = [
    {
      fecha: '2020 - 2024',
      ubicacion: 'Ixtac, Veracruz',
      puesto: 'Desarrollador de Software',
      empresa: 'Empresa 1',
      logros: ['Logro 1', 'Logro 2']
    },
    {
      fecha: '2021 - 2024',
      ubicacion: 'Córdoba, Veracruz',
      puesto: 'Desarrollador de Software',
      empresa: 'Empresa 2',
      logros: ['Logro A', 'Logro B']
    }
  ];
}
