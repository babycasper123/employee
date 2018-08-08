import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
  },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes),ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
