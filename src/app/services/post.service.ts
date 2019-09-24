import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:Http) { }

  getPosts()
  {
    return this.http.get(this.url);
  }
  addPost(postValues)
  {
    return this.http.post(this.url,JSON.stringify(postValues))
  }
  updatePost(updateData)
  {
    return this.http.put(this.url+'/'+updateData.id, JSON.stringify(updateData));
  }
  deletePost(deleteDataid)
  {
    return this.http.delete(this.url+'/'+deleteDataid);
  }
}
