import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private apiservice: ApiService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          //call refresh token api
          // var token: any = JSON.parse(localStorage.getItem('access_token'));
          // this.apiservice.refreshTOken().subscribe((res: any) => {
          //   console.log(res);
          //   return next.handle(request.clone({
          //     setHeaders: { Authorization: `Bearer ${token.access_token}` }
          //   }))
          // })

          //check respose = If response = 401
          // auto logout if 401 response returned from api
          // this.apiservice.logoutUser().subscribe(res =>{
          //   localStorage.removeItem('access_token');
          //   location.reload();
          // });
          // window.location.reload();
          localStorage.removeItem('access_token');
        }
        if (err.status === 400) {
          // debugger;
          let message: any;
          if (err.error.error) {
            message = err.error.error;
          } else if (err.error.message) {
            message = err.error.message;
          } else if (err.error.password) {
            message = err.error.password;
          }
          if (Object.values(err.error)[0][0]) {
            this.messageService.add({
              severity: 'error',
              // summary: 'error',
              // detail: Object.values(err.error)[0][0],

              detail: message,
            });
          } else if (err.error.message.email) {
            this.messageService.add({
              severity: 'error',

              // summary: 'error',
              detail: err.error.message.email,
            });
          } else if (err.error) {
            this.messageService.add({
              severity: 'error',
              // summary: 'error',
              detail: err.message,
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'error',
              detail: err.error.message.email,
            });
          }
        }
        if (err.status === 500) {
          if (err.error) {
            this.messageService.add({
              severity: 'error',
              summary: 'error',
              detail: err.error.message || err.statusText,
            });
          }
        }
        if (err.status === 403) {
          if (err.error) {
            this.messageService.add({
              severity: 'error',
              summary: 'error',
              detail: err.error.message || err.statusText,
            });
          }
        }
        if (err.status === 422) {
          if (err.error) {
            this.messageService.add({
              severity: 'error',
              summary: 'error',
              detail: err.error.message || err.statusText,
            });
          }
        }
        const error = err.error.message || err.statusText;
        this.spinner.hide();
        return throwError(error);
      })
    );
  }
}
