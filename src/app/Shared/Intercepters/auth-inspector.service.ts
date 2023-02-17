import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInspectorService implements  HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let httpHeader = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "qwertyuiopasdfghjkl@98746321"
    })
    let reqclone = req.clone({headers : httpHeader});
    return next.handle(reqclone);
  }
}
