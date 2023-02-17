import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { CustomRegex } from '../../Validation/regaxs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Loginform !: FormGroup;
  show: boolean = false;
  username: string = "task@gmail.com";
  loginpassword: string = "12345678";
  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit(): void {
    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.loginpassword)
    this.LoginInput();
  }

  LoginInput() {
    this.Loginform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.onlyNumber), Validators.minLength(8)])
    })
  }
  get f() {
    return this.Loginform.controls;
  }
  OnLoginform() {
    // console.log(this.Loginform.value);
    let evalue = this.Loginform.get('email')?.value;
    let pvalue = this.Loginform.get('password')?.value;

    if (localStorage.getItem('username') === evalue && localStorage.getItem('password') === pvalue) {
      this.router.navigate(['/home'])
      this.loginService.LogIn()
    } else {
      this.router.navigate(['unauthorized'], { relativeTo: this.route })
    }

    this.Loginform.reset()

  }
  toggleBtn() {
    this.show = !this.show;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.show ? 'text' : 'password';
  }
}
