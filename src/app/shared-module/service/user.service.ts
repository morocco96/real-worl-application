import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map,catchError, distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from './api.service';
import { User } from '../models';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private currentUserSubject = new BehaviorSubject<User>(new User());
public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
public isAuthenticated = this.isAuthenticatedSubject.asObservable();



constructor(
  private apiService: ApiService,
  private http: HttpClient,
  private jwtService: JwtService

) { }

populate() {
  if(this.jwtService.getToken()) {
    this.apiService.get('/user')
    .subscribe(
      data => this.setAuth(data.user),
      err => this.purgeAuth()
    );
  }else {
    this.purgeAuth();
  }
}

setAuth(user:User) {
  this.jwtService.saveToken(user.token);
  this.currentUserSubject.next(user);
  this.isAuthenticatedSubject.next(true);
}

purgeAuth() {
  this.jwtService.destroyToken();
  this.currentUserSubject.next({} as User);
  this.isAuthenticatedSubject.next(false);
}




attemptAuth(type:any, credentials:any): Observable<User> {
  let route = (type === 'login') ? '/login' : '';
  return this.apiService.post('/users' + route, {user: credentials})
  .pipe(
    map(
    data => {
      this.setAuth(data.users);
      return data;
    }
  ));
}

getCurrentUser():User {
  return this.currentUserSubject.value;
}

update(user:any): Observable<User> {
  return this.apiService.put('/user', { user })
  .pipe(map(data => {
    this.currentUserSubject.next(data.user);
    return data.user;
  }));
}

}
