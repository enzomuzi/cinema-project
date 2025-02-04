import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotaoHomeComponent } from './features/componentes-gerais/botao-home/botao-home/botao-home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BotaoHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cinema-project';
}
