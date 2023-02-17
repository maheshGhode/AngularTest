import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggIn : boolean = false;
  constructor() { }

  IsAuthanticated () : Promise<boolean>{
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve (this.loggIn)
      }, 20);
    })
  }

  LogIn() : boolean {
    return this.loggIn = true;
  }

  Logout() : boolean {
    return this.loggIn = false
  } 
}
