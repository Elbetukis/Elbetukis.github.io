import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterestsComponent } from './interests.component';

describe('InterestsComponent', () => {
  let component: InterestsComponent;
  let fixture: ComponentFixture<InterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title "Interests"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Interests');
  });

  it('should render the list of interests', () => {
    component.interestsList = ['Programming', 'Reading', 'Traveling'];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const listItems = compiled.querySelectorAll('li');
    expect(listItems.length).toBe(3);
    expect(listItems[0].textContent).toContain('Programming');
    expect(listItems[1].textContent).toContain('Reading');
    expect(listItems[2].textContent).toContain('Traveling');
  });

  it('should handle an empty interests list gracefully', () => {
    component.interestsList = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const message = compiled.querySelector('ul');
    expect(message?.textContent).toBe('');
  });
});
