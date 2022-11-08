import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private apiservice: ApiService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if account is logged in and request is to the api url
    if (
      request.url.includes('login') ||
      request.url.includes('refresh') ||
      request.url.includes('register')
    )
      return next.handle(request);

    var token: any = JSON.parse(localStorage.getItem('award_access_token'));
    const isLoggedIn = token ? true : false;
    const isApiUrl = request.url.startsWith(environment.api_baseurl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token.award_access_token}` },
      });
    }
    return next.handle(request);
  }
}
