import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//new code
import { HttpClient } from "@angular/common/http";
//new code
import { Observable, of } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { IPosts } from '../common/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:Http, private httpc:HttpClient) { }

  getPosts():Observable<IPosts[]>
  {
    //new code
    return this.httpc.get<IPosts[]>(this.url).pipe(catchError(this.handleError("getPosts",[])));
    //new code

    //return this.http.get(this.url).pipe(catchError(this.handleError("getPosts",[])));
    //another implementation
    //return this.http.get(this.url).pipe(catchError( (error:any):Observable<any>=>{ console.log("arun"+error);return error; }));
  }
  addPost(postValues)
  {
    return this.httpc.post(this.url,JSON.stringify(postValues)).pipe(catchError(this.handleError("addPost",[])));
  }
  updatePost(updateData)
  {
    return this.httpc.put<IPosts[]>(this.url+'sws/33'+updateData.id, JSON.stringify(updateData)).pipe(catchError(this.handleError("updatePosts",[])));
    //return this.http.put(this.url+'/'+updateData.id, JSON.stringify(updateData)).pipe(catchError(this.handleError("updatePosts",[])));
  }
  deletePost(deleteData)
  {
    return this.httpc.delete(this.url+'/'+deleteData.id).pipe(catchError(this.handleError("deletePost",[])));
  }

  private handleError<T>(operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      if(error.status==404)
      {
          
       };
      // TODO: better job of transforming error for user consumption
      //this.log('failed:');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
