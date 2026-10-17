import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/loginModel';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  constructor(private formbuilder: FormBuilder) {}
  private readonly router = inject(Router)

  loginForm!: FormGroup;
  
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        senha: ["", [Validators.required]]

      }
    );
  }

  submitlogin() {
    debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;
  }
}
