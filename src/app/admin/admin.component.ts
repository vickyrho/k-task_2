import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { HttpClient} from "@angular/common/http";
import { MainService } from "../main.service";
import { CookieService} from "angular2-cookie/core";
import * as jsPDF from 'jspdf' ;
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MainService,CookieService]
})


export class AdminComponent implements OnInit {
  isFirstPage = true ;
  isSecondPage = false ;
  selectedOption : any ;
  cookieval : any ;
  x: any ;
  res: any ;
  URL = 'path_to_api';
  selectedFIle : any ;
  System: any ;
  data: any ;
  string : any ;
  biller : any;
  purpose: any ;
  amount: any ;

  constructor( public http : HttpClient , public mainservice : MainService, public cookie : CookieService,public router: Router) { }

  ngOnInit() {

  }

  public uploader:FileUploader = new FileUploader({url: this.URL});



  getAllBills(){
    this.cookieval = this.cookie.get('user');
    this.x = {
      cookieval: this.cookieval
    } ;
    this.mainservice.getAllBill(this.x).subscribe(
      (response) => {
        this.res = response ;
        console.log(this.res);
        this.selectedFIle = this.res.output ;
        console.log('hello');
      })
  }

  onFileSelected(event){
      this.selectedFIle = event.target.files[0];
      console.log(this.selectedFIle);
  }

  onUpLoad(){
    const fd = new FormData();
    fd.append('biller',this.biller);
    fd.append('purpose',this.purpose);
    fd.append('amount',this.amount);
    fd.append('cookieval',this.cookie.get('user'));
    fd.append('stub',this.selectedFIle,this.selectedFIle.name);

    console.log(fd.getAll('stub'));
    // for (let pair of fd.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]);
    // }

    this.mainservice.upload(fd).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  logOut(){
    this.cookie.remove('user');
    this.router.navigateByUrl('/login');

  }

  showModel(item){
    console.log(item);
    this.data = {
      id : item.id ,
      cookieval : this.cookie.get('user')
    };

    this.mainservice.getAllInfo(this.data).subscribe(
      (response) => {
        let bl = new Blob([response], {type : 'application/pdf'});
        let url = window.URL.createObjectURL(bl);
        window.open(url);
      }
    )

  }

  changeScope(bool){
    this.isFirstPage = bool ;
    this.isSecondPage = !bool ;

  }




}


