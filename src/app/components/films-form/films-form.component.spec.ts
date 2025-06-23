import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsFormComponent } from './films-form.component';

describe('FilmsFormComponent', () => {
  let component: FilmsFormComponent;
  let fixture: ComponentFixture<FilmsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
