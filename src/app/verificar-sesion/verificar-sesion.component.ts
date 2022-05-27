import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-verificar-sesion',
  templateUrl: './verificar-sesion.component.html',
  styleUrls: ['./verificar-sesion.component.scss']
})
export class VerificarSesionComponent implements OnInit {

  constructor(private verifyService: VerifyService, private router: Router) {
    if (this.verifyService.isLogged()) {
      this.router.navigate(['/inicio']);
    }
  }

  ngOnInit(): void {
  }
}
