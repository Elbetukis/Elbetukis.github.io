import { TestBed } from '@angular/core/testing';
import { AchievementsComponent } from './achievements.component';

describe('AchievementsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsComponent] // Cambiado de declarations a imports
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AchievementsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the title "Achievements"', () => {
    const fixture = TestBed.createComponent(AchievementsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Achievements');
  });

  // Añade más pruebas según sea necesario...
});
