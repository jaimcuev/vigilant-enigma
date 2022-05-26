import { Component } from '@angular/core';
import { TemporizadorService } from './temporizador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bcp-app';

  constructor(private temporizador: TemporizadorService) {
  }
}
