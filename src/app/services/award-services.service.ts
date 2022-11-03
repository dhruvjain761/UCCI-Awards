import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root',
})
export class AwardServices {
  public _awardbaseurl = environment.award_base_url;

  // token: any = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3VjY2kuYnJhbmR0YWxrcy5pbi9hcGkvbG9naW4iLCJpYXQiOjE2NjQ5NTg1MTQsImV4cCI6MTY2NDk2MjExNCwibmJmIjoxNjY0OTU4NTE0LCJqdGkiOiJoQnhPRFpLMTJZVUdUOGhOIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.QygONTvA_F77cpydrRmT--piMAEWn2X_4lFxUq5r5Mo';

  // headers: any = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${this.token}`,
  // });

  // requestOptions = { headers: this.headers };

  constructor(private http: HttpClient, private https: HTTPApi) {}

  /********************  Service Master Services Start  ********************/

  // post

  insertService(modal: any): Observable<any> {
    return this.https.post('award-service/store', modal);
  }

  // get

  getServiceList(): Observable<any> {
    return this.https.get('award-service');
  }

  // edit

  editService(modal: any, id: number): Observable<any> {
    return this.https.put(`award-service/update/${id}`, modal);
  }

  // delete

  deleteService(id: number): Observable<any> {
    return this.https.delete(`award-service/delete/${id}`);
  }

  /********************  Service Master Services End  ********************/
}
