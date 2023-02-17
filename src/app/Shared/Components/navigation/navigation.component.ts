import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private loginService : LoginService, private router : Router) { }
 
  ngOnInit(): void {
  }

  onLogOut(){
    this.loginService.Logout();
    this.router.navigate(['/'])
    localStorage.removeItem('username')
    localStorage.removeItem('password')
  }

}
