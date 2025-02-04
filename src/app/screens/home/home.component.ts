import { Component } from '@angular/core';
import { BotaoHomeComponent } from '../../components/botao-home/botao-home/botao-home.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [BotaoHomeComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: { ngSkipHydration: 'true' },
})
export class HomeComponent {}
