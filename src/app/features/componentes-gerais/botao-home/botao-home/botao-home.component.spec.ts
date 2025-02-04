import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoHomeComponent } from './botao-home.component';

describe('BotaoHomeComponent', () => {
  let component: BotaoHomeComponent;
  let fixture: ComponentFixture<BotaoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
