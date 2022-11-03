import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HTTPApi, private https: HttpClient) {}
  // **********************************************Authentication API's *****************************************
  // user register api
  register(data: any): Observable<any> {
    return this.http.post('register', data);
  }
  // user login api
  login(data: any): Observable<any> {
    return this.http.post('login', data);
  }

  // logout user api
  logoutUser(): Observable<any> {
    return this.http.post('logout');
  }

  // refresh token api
  refreshTOken(): Observable<any> {
    return this.http.post('refresh');
  }
  getTurnover(): Observable<any> {
    return this.http.get('turnover/');
  }
  getClassification(): Observable<any> {
    return this.http.get('classification');
  }
  // getServiceType(): Observable<any> {
  //   return this.http.get('award-service/');
  // }
  getAwardCategory(): Observable<any> {
    return this.http.get('award-catgeory/');
  }

  // *******************************************************Award Configuration API's***************************************

  postAwardMetrix(modal: any): Observable<any> {
    return this.http.post('awardmatrix', modal);
  }

  getAwardMetrix(): Observable<any> {
    return this.http.get('awardmatrix');
  }

  // *******************************************************Get Data from json***************************************

  getDataFromJson(path): Observable<any> {
    return this.https.get(path);
  }

  // *******************************************************Registered Users API's***************************************

  getRegisteredUsers(): Observable<any> {
    return this.http.get('awardsregistration');
  }

  updateStatus(id: number, modal: any): Observable<any> {
    debugger;
    return this.http.put(`awardsregistration/update/${id}`, modal);
  }
}
