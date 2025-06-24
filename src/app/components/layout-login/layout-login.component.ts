import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-login',
  imports: [
  ],
  templateUrl: './layout-login.component.html',
  styleUrl: './layout-login.component.css'
})
export class LayoutLoginComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
}
