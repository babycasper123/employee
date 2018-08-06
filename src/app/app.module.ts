import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { LoginComponent } from "./components/login/login.component";

const appRoutes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  { path: "login", component: LoginComponent }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
