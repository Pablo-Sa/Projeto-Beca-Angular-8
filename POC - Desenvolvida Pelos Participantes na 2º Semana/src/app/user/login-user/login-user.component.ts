import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { User } from '../model/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password':['',[Validators.required, Validators.minLength(6)]]
  })

  loading: boolean = false

  constructor(private fb: FormBuilder, private authService: AuthService,
  private snackBar:MatSnackBar, private router: Router ) { }

  ngOnInit(): void {
  }

  private loginOkNotification(u: User) {
    this.snackBar.open('Bem vindo ' + u.firstname, 'OK', {
      duration: 2000,
      verticalPosition:'top'
    })
  }
  private loginErrorNotNotification(err) {
    this.snackBar.open(err,'Ok', {
      duration: 2000,
      verticalPosition:'top'
    })
  }



  onSubmit() {
    this.loading = true;
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password
    this.authService.login(
      email,password
    ).subscribe((u) => {
      this.loginOkNotification(u);
      this.router.navigateByUrl('/');
      this.loading = false

    },
      (err) => {
        this.loginErrorNotNotification(err);
        this.loading = false
    })

  }

  loginGoogle() {
    this.loading = true
    this.authService.loginGoogle().subscribe((u) => {
      this.loginOkNotification(u);
      this.router.navigateByUrl('/');
      this.loading = false

    },
      (err) => {
        this.loginErrorNotNotification(err);
        this.loading = false
    
    });
  }

}
