import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Source } from '../models/Source';

@Injectable({
  providedIn: 'root'
})
export class HandlerService {

  api_url: string = environment.mockend_url;



  constructor(private http: HttpClient) { }


  getAllSources(page: number, limit: number):Observable<Source>{
    return this.http.get<Source>(this.api_url + "?page="+page + "&limit="+limit).pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getSingleService(id: number):Observable<Source>{
    return this.http.get<Source>(this.api_url + "/" + id).pipe(
      retry(1),
      catchError(this.processError)
    )
  }





  processError(err){
    let message = '';

    if(err instanceof ErrorEvent){
      message = err.error.message;
    }else{
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;

    }
    console.log(message);
    return throwError(message);

  }
}
