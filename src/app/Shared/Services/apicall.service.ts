import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser } from '../Interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  baseUrl : string = `${environment.UserBaseUrl}`;
  constructor(private http : HttpClient) { }

  getAllUsers() : Observable<Iuser>{
    return this.http.get<Iuser>(this.baseUrl);
  }
}
