import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ImageCompareModule } from 'primeng/imagecompare';
import { AuthService } from '../auth.service';
import { catchError, Observable, of, Subscription, tap } from 'rxjs';
import { authDTO } from '../../../Models/Auth/authenticationDTO';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabel,
    PasswordModule,
    ImageCompareModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  destroy : Subscription[] = [];
  userDataObj: {
    userData: authDTO | null,
    isLoading: boolean,
  } = {
      userData: null,
      isLoading: true,
    }


  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private authService: AuthService) {

  }
  ngOnInit() {

  }

  login() {
    this.userDataObj.isLoading = true;
    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
    this.destroy.push(
      this.authService.userLogin(username!, password!).pipe(
        tap((res) => {
          this.userDataObj.isLoading = false;
          this.userDataObj.userData = res;
        }),
        catchError(err => {
          this.userDataObj.isLoading = false;
          return [];
        })
      ).subscribe()
    )
  }

  ngOnDestroy(): void {
    if (this.destroy) {
      this.destroy.forEach((unSub) => unSub.unsubscribe())
    }
  }

}
