import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';


import {LoginService} from './services/login.service';
import { RegisterComponent } from './components/register/register.component';


const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
  },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path:"dash", component:UserDashComponent},
  { path:"register", component:RegisterComponent}
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, HomeComponent, UserDashComponent, RegisterComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes),ReactiveFormsModule,HttpClientModule],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
