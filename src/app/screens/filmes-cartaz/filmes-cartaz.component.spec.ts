import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesCartazComponent } from './filmes-cartaz.component';

describe('FilmesCartazComponent', () => {
  let component: FilmesCartazComponent;
  let fixture: ComponentFixture<FilmesCartazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmesCartazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmesCartazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
