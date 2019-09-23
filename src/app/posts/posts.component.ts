import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(http: Http) { 
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(Response=>{this.posts = Response.json(); console.log(this.posts);});
  }

  ngOnInit() {
  }

}
