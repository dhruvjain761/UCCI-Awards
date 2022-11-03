import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HTTPApi } from './httpapi.service';
@Injectable({
  providedIn: 'root',
})
export class FacilityBookingService {
  constructor(private http: HTTPApi, private https: HttpClient) {}

  // Insert

  insertFacilityData(data: any): Observable<any> {
    // const body = JSON.stringify(data)
    // debugger;
    // this.http.post('bookFacility', data).subscribe((res:any)=> {
    //   console.log(res);
    // });
    // debugger;
    return this.http.post('bookFacility', data);
    // return of({hello:"hello"});
  }

  // Get
  getFacilityData(): Observable<any> {
    return this.http.get('getAllFacilities');
  }

  getDataFromJson(): Observable<any> {
    return this.https.get<any>(
      '/assets/facility-booking.json'
      // this.requestOptions
    );
  }
// get country with json

  getCountryWithJson(): Observable<any>{
    return this.https.get<any>(
      '/assets/country.json'
    );
  }

  // getData With Json Dynamic

  getJsonData(url: any): Observable<any> {
    return this.https.get<any>(url);
  }

  facilityPayment(payToken: any, id: any): Observable<any> {
    
    return this.http.put(`payFacility/${payToken}/${id}`);
  }

  putApproval( id: any, data: any): Observable<any> {
    return this.http.put(`approveFacility/${id}`, data)
  }
}
