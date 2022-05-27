import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GeolocalizacionService } from 'src/app/geolocalizacion.service';
import { VerifyService } from '../../services/verify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  cardNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(9),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(6),
  ]);
  loginForm = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private geolocalizacionService: GeolocalizacionService,
    private VerifyService: VerifyService,
    private router :Router  ) {
    this.geolocalizacionService.solicitarGeolocalizacion();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cardNumber: this.cardNumber,
      password: this.password,
    });
  }

  onSubmit() {
    this.VerifyService.login( this.loginForm.value.cardNumber,this.loginForm.value.password ).subscribe(x => {
      if(x.access_token){
        this.VerifyService.setReponse(x);
        this.router.navigate(['/inicio'])
      }
    })
  }

  inputNum(num: any) {
    this.password.patchValue(this.password.value + num);
  }
  delNum() {
    this.password.patchValue(
      this.password.value.substring(0, this.password.value.length - 1)
    );
  }
  delAll() {
    this.password.setValue('');
  }
}