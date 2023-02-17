import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Shared/Components/dashboard/dashboard.component';
import { LoginComponent } from './Shared/Components/login/login.component';
import { NotAuthoriseComponent } from './Shared/Components/not-authorise/not-authorise.component';
import { PagenotfoundComponent } from './Shared/Components/pagenotfound/pagenotfound.component';
import { UsersGuard } from './Shared/Gaurd/users.guard';

const routes: Routes = [
  {
    path : "", component : LoginComponent
  },
  {
    path : "home", canActivate : [UsersGuard] , component : DashboardComponent
  },
  {
    path : "unauthorized", component : NotAuthoriseComponent
  },
  {
    path : "page-not-found", component : PagenotfoundComponent
  },
  {
    path : "**", redirectTo : "page-not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
