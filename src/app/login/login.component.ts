import { Component, OnInit } from '@angular/core';
import {MainService} from "../main.service";
import { CookieService } from "angular2-cookie/core";
import {Router} from '@angular/router';
import { ToasterModule ,ToasterService,ToasterConfig} from "angular2-toaster";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MainService,CookieService,ToasterService]
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  userData: any;
  res : any ;
  str : any ;

  constructor(public router : Router , public mainService : MainService,public cookie: CookieService,private toasterService: ToasterService) { }

  ngOnInit() {
  }

  public config: ToasterConfig =
    new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: false,
      timeout: 2000
    });

  login(){
    this.userData =  {
    data:{
      username : this.username,
      password:this.password
    }
    };

    this.mainService.loginUser(this.userData).subscribe(
      response => {
        this.res = response ;
        console.log('hey there');
        this.cookie.put('user',this.res.cookie);
        if(this.res.teamid == 1){
            this.toasterService.pop('welocome USER');
            this.router.navigateByUrl('/admin');
        }else if(this.res.teamid == 2){
          this.myFunction("loggin in ");
            this.router.navigateByUrl('/finance');
        }
        else{
          alert("wrong credentials");
        }
      }
    )



  }

  myFunction(s) {
    this.str=s;
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
