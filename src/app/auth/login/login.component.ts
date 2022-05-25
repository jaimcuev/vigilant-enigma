import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(9),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginForm.value);
  }

  inputNum(num: any) {
    console.log(num);
    
    // this.loginForm.value.password = this.loginForm.value.password + num.value;
  }
  delNum() {}
}
