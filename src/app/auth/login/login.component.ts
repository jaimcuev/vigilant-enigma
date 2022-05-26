import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cardNumber: this.cardNumber,
      password: this.password,
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  inputNum(num: any) {
    this.password.patchValue(this.password.value + num);
  }
  delNum() {
    this.password.patchValue(
      this.password.value.substring(
        0,
        this.password.value.length - 1
      )
    );
  }
}
