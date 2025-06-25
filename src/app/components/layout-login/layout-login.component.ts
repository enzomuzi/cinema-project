import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layout-login',
  imports: [],
  templateUrl: './layout-login.component.html',
  styleUrl: './layout-login.component.css'
})
export class LayoutLoginComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();

  @Output("navigate") onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
