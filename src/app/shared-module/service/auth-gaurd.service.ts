import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate (
    route : ActivatedRouteSnapshot,
    State: RouterStateSnapshot
  ): Observable<boolean> {
    
    return this.userService.isAuthenticated.pipe(take(1));
  }
}
