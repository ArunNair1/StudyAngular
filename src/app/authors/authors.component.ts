import { Component, OnInit } from '@angular/core';
import { AuthorServicesService } from '../author-services.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  constructor(author:AuthorServicesService) {
    this.authors= author.getList();
   }

   books = {
     'title' : "the Pipe functions",
     'price':100.8789,
     'rating':4.878,
     'curdate': new Date(),
     'counts' : 3000000
    }

    dummytext = {
      value : " is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in" 
    }


  ngOnInit() {
  }

}
