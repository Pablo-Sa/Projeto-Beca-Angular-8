import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ User } from '../model/user.model'
import { AuthService } from '../../auth/shared/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private fb:FormBuilder, private auhtService:AuthService, private snackBar:MatSnackBar,
    private router: Router) { }
  formRegister : FormGroup = this.fb.group({
    'firstname':['', [Validators.required]],
    'lastname':['',[Validators.required]],
    'email':['',[Validators.required, Validators.email]],
    'phone':['',[]],
    'password1':['',[Validators.required, Validators.minLength(6)]],
    'password2':['',[Validators.required, Validators.minLength(6)]]
  },{
    validators:this.matchingPasswords
  })
  ngOnInit(): void {
  }


  matchingPasswords(group:FormGroup){
    if(group){
      const password1 = group.controls['password1'].value;
      const password2 = group.controls['password2'].value;
      if(password1 == password2){
        return null;
      }
    }
    return {macthing:false}
  }
  onSubmit(){
      const newUser:User={
        firstname :this.formRegister.value.firstname,
        lastname:this.formRegister.value.lastname,
        email:this.formRegister.value.email,
        password:this.formRegister.value.password1,
        phone:this.formRegister.value.phone
    }

    this.auhtService.email(newUser).subscribe((a) => [

    ])


   this.auhtService.register(newUser).subscribe((u) => {
        this.snackBar.open('Criado com sucesso','OK',{
          duration:2000,
          verticalPosition:'top'
        })
        this.router.navigateByUrl('/')
      },
      (err)=>{
        console.log(err);
        this.snackBar.open('Erro ao criar a conta','OK',{
          duration:2000,
          verticalPosition:'top'
        })
      }
      )




  }



}
