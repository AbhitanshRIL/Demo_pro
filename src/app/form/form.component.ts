import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = 'forms';
  
  loginForm = new FormGroup({
    user:new FormControl('', [Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(5)]),
    email:new FormControl('',[Validators.required, Validators.email]),
  })
  LoginUser(){
    console.warn(this.loginForm.value)
  }

  get user(){
    return this.loginForm.get('user')
  }
  get password(){
    return this.loginForm.get('password')
  }
  get email(){
    return this.loginForm.get('email')
  }

}