import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CommonClass } from './common';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  localStorage: any;
  slug: any;
  constructor(
    private commonFunction: CommonClass,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const expectedRole = route.data.route;
    console.log(expectedRole);
    this.slug = this.activeRoute.snapshot;
    console.log(this.slug);
    this.localStorage = this.commonFunction.getLocalStorage();
    if (this.localStorage) {
      if (this.slug._routerState.url == '') {
        // this.route.navigateByUrl('/dashboard');
        return false;
      }
      console.log(this.localStorage);
      return true;
    } else {
      this.route.navigateByUrl('');
      return false;
    }
  }
}
