import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/service/auth.service';
import {User} from '../../core/model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  saved = false;
  user: User;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
      // rememberMe: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  save(): void {
    if (this.loginForm.valid) {
      // console.log('username - ', this.loginForm.get('username').value);
      this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
        .subscribe(res => {
          if (res.headers.get('authorization')) {
            this.authService.getAccountByUsername(this.loginForm.get('username').value).subscribe(res2 => {
              localStorage.setItem('token', res.headers.get('authorization'));
              localStorage.setItem('user', JSON.stringify(res2));
              this.router.navigateByUrl('');
            });
          }
        });
      this.saved = true;
    }
  }
}
