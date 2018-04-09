import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FileUploadModule} from "ng2-file-upload";
import { MainService } from "./main.service";
import { HttpClientModule } from "@angular/common/http";
import { FinanceComponent } from './finance/finance.component';
import { NavComponent } from './nav/nav.component';
import { ToasterModule , ToasterService } from "angular2-toaster";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    FinanceComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    ToasterModule
  ],
  providers: [MainService,CookieService,ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
