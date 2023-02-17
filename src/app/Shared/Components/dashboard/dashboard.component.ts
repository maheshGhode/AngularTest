import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../../Interface/interface';
import { ApicallService } from '../../Services/apicall.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Users : any;
  constructor(private apicallService : ApicallService) { }

  ngOnInit(): void {
    this.getUsers()    
  }

  getUsers(): void{
   this.Users = this.apicallService.getAllUsers()
  }
}
