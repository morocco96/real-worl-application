import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { JwtService } from './jwt.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: Http,
    private jwtService: JwtService
  ) { }

  private setHeaders(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new Headers(headersConfig)
  }

  private formatErrors(error:any) {
    return Observable.throw(error.json());
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`,{params})
    .pipe(catchError(this.formatErrors));
  }

    put(path: string, body: Object = {}):Observable<any> {
      return this.http.put(
        `${environment.api_url}${path}`,
        JSON.stringify(body)
      ).pipe(catchError(this.formatErrors));
    }



  post(path: string, body: object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body), {headers: this.setHeaders()})
    .pipe(
      catchError(this.formatErrors),
      map((res:Response) => res.json()
    ));
    
  }

  delete(path:string):Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }

 
}