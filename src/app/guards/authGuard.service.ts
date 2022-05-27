import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { VerifyService } from '../services/verify.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private verifyService: VerifyService, private router: Router) { }

    canActivate() {
        if (!this.verifyService.isLogged()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}