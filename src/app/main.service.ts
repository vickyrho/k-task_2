import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';
import { HttpRequest } from "@angular/common/http";
import { CookieService } from "angular2-cookie/core";
import {RequestOptions} from "@angular/http";

@Injectable()
export class MainService {

  constructor(private http : HttpClient) { }

  loginUser(data) : Observable<any> {
    console.log(data);
    return this.http.post("http://139.59.25.189:1234/login",data).map(
      (response)=> {
        console.log(response);
        return response ;
      });
  }

  upload(fd):Observable<any> {
    let headers = new Headers();
    return this.http.post('http://139.59.25.189:1234/upload',fd).map(
      (response) => {
        return response ;
      }
    )
  }

  getAllBill(cookieval): Observable<any>{
    console.log(cookieval);
    return this.http.post('http://139.59.25.189:1234/getdetails',cookieval).map(
      (response) =>{
        return response ;
      }
    )
  }

  getAllInfo(cookie): Observable<any>{
    console.log('new');
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/pdf'
        })
    };
    return this.http.post('http://139.59.25.189:1234/getfile',cookie,{responseType:'blob'});

  }

  changeStat(item): Observable<any>{
    return this.http.post('http://139.59.25.189:1234/status',item).map(
      (response) => {
        return response ;
      }
    )
  }

}
