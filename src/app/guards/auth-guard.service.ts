import { CommonService } from './../common.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private commonService: CommonService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.commonService.isAuthenticated) {
        return true;
    }

    // navigate to login page
    this._router.navigate(['/login']);
    // redirect url so after authing we can move them back to the page they requested
    return false;
  }
}
