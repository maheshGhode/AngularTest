import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Shared/Components/login/login.component';
import { DashboardComponent } from './Shared/Components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './Shared/Components/pagenotfound/pagenotfound.component';
import { NavigationComponent } from './Shared/Components/navigation/navigation.component';
import { NotAuthoriseComponent } from './Shared/Components/not-authorise/not-authorise.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInspectorService } from './Shared/Intercepters/auth-inspector.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    NavigationComponent,
    NotAuthoriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInspectorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
