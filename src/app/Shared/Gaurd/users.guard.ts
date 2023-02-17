import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<| UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.IsAuthanticated()
      .then((Authenticated: boolean) => {
        if (Authenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false
        }
      })
  }

}
