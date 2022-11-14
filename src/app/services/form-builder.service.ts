import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private http: HTTPApi) {}

  //to get all custom forms
  getAPI(endPoint: any): Observable<any> {
    // debugger;
    return this.http.get(endPoint);
  }
  //to delete custom form from from list
  deleteCustomForm(id: any): Observable<any> {
    return this.http.delete('form/' + id);
  }
  //to create custom form
  createCustomForm(endPoint: any, formData: any): Observable<any> {
    return this.http.post(endPoint, formData);
  }
  //to edit custom form
  editCustomForm(id?: any, formData?: any): Observable<any> {
    return this.http.put('form/' + id, formData);
  }
}
