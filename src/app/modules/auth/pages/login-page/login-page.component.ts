import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
formLogin:FormGroup=new  FormGroup({});
  constructor(private authService:AuthService,
    private cookieService:CookieService,private router:Router) { }

  ngOnInit(): void {
    this.formLogin=new FormGroup(
      {
        email:new FormControl('',
        [
          Validators.required,
          Validators.email
        ]),
        password:new FormControl('',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    );
  }

  sendLogin(){
  const {email,password}=this.formLogin.value;
    this.authService.sendCredential(email,password).
    subscribe(responseOk=>{
      const {tokenSesion,data}=responseOk;
      this.cookieService.set('token',tokenSesion,4,'/');
      console.log('Response Ok ',responseOk.token);
      this.router.navigate(['/','tracks']);
    },err=>{
      console.log(' ',err);
    });
  }

}
