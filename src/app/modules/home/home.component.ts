import { UserService } from './../../models/interfaces/user/user.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  signupForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService
    ){ }

  onSubmitLoginForm(): void {
    if(this.loginForm.value && this.loginForm.valid){
      this.userService.authUser(
        this.loginForm.value as AuthRequest).subscribe({
          next: (response) =>{ //next captura o callback e o response é o valor do callback
            if(response){
              this.cookieService.set("USER_INFO", response?.token); //a ? antes do . é um operador javascript chamado de "Optional Chaining"
              alert("Login Realizado com Sucesso!");
              this.loginForm.reset();
            }
          },
          error: (err) => console.log (err)
        })
    }
  }

  onSubmitSingupForm(): void{
    if(this.signupForm.value && this.signupForm.valid){
      this.userService.signupUser(
        //Cast com Typescript - dados são do tipo que está esperando lá no serviço
        this.signupForm.value as SignupUserRequest).subscribe({
          next: (response) =>{
            if(response){
              alert("Usuário criado com sucesso!");
              this.signupForm.reset();
              this.loginCard = true;
            }
          },
          error: (err) => console.log(err)
        })
    }
  }

}
