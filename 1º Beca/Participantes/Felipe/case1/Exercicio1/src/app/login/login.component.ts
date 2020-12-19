import { Component, OnInit } from '@angular/core';
import { USER } from './user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth-Service/Auth.service'
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]

})
export class LoginComponent implements OnInit {
  loginForm:FormGroup= this.fb.group({
    'user':['', Validators.required], 'password':['',Validators.required]
  })


  constructor(private fb:FormBuilder,
    private router :Router,
    private auth:AuthService,
    private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const crendentials = this.loginForm.value
    const res = this.auth.Login(crendentials)



  }

  }

