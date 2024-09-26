import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguagesComponent } from './languages.component';


describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture<LanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title "Languages"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Languages');
  });

  it('should render the list of languages', () => {
    component.languagesList = [
      { name: 'English', level: 'Fluent' },
      { name: 'Spanish', level: 'Native' }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const listItems = compiled.querySelectorAll('li');
    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toContain('English: Fluent');
    expect(listItems[1].textContent).toContain('Spanish: Native');
  });
});
