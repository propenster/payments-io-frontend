import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Source } from '../models/Source';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/json'
  })
}

export class NewsletterModel{
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class HandlerService {

  api_url: string = environment.mockend_url;



  constructor(private http: HttpClient) { }

  createResourceRequest(data: any):Observable<any>{
    return this.http.post("https://propenster-node-apis.herokuapp.com/api/v1/resource-requests/", data, httpOptions).pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  subscribeEmailToNewsletter(data: any):Observable<any>{
    return this.http.post("https://propenster-node-apis.herokuapp.com/api/v1/newsletters/", data, httpOptions).pipe(
      retry(1),
      catchError(this.processError)
    )
  }
  getAllEverySources():Observable<Source>{
    return this.http.get<Source>("https://propenster-node-apis.herokuapp.com/api/v1/sources/all").pipe(
      retry(1),
      catchError(this.processError)
    )
  }

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

  getSingleServiceBySlug(slug: string): Observable<Source>{
    return this.http.get<Source>(this.api_url + "/sourceBySlug/"+slug).pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  sendContactEmail(data):Observable<any>{
    return this.http.post<any>("https://propenster-node-apis.herokuapp.com/api/v1/send-contact-email", JSON.stringify(data), httpOptions).pipe(
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
