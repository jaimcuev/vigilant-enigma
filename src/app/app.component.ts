import { Component, OnInit } from '@angular/core';
import { VerifyService } from './services/verify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bcp-app';

  constructor(private verifyService: VerifyService) {
  }

  ngOnInit(): void {
    this.verifyService.response.subscribe(_ => {
      if(this.verifyService.isLogged()) {
        this.verifyService.temporizadorDeSesion();
      }
    });
  }
}
