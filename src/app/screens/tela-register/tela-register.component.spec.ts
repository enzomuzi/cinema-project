import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRegisterComponent } from './tela-register.component';

describe('TelaRegisterComponent', () => {
  let component: TelaRegisterComponent;
  let fixture: ComponentFixture<TelaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
