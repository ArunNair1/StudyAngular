import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  errormsg : string;
   
  constructor(private postservice: PostService, private route:ActivatedRoute) { 
   this.errormsg="tests";
   this.route.paramMap.subscribe(paramS=>{ console.log("testId is : "+paramS.get('testid')); });
  }

  postMethod(nextPost)
  {

    let postValues ={ title :nextPost.value};
    nextPost.value="";
    //console.log(postValues);
    this.postservice.addPost(postValues)
    .subscribe(
      Response=>{ 
               postValues['id']= Response['id'];
               this.posts.push(postValues);
               console.log(Response);
              },
      (error:Response)=>{ 
        if(error.status==404)
        {
          alert("404 error");
          //the below line can help to set error in the form
          //this.form.setErrors(error.json());
        }
              alert("error"); 
              console.log(error);
            } );

  }

  updateMethod(updateData)
  {
    updateData.title ="arun tests";
    this.postservice.updatePost(updateData).subscribe(
      Response=>{ console.log(Response); },
      error=>{ console.log(error);}
      );
  }

  deleteMethod(deleteData)
  {
    this.postservice.deletePost(deleteData).subscribe(Response=>{ 
      console.log(Response);
      let index = this.posts.indexOf(deleteData);
      console.log(index);
       if(index>=0) this.posts.splice(index,1);
     },(error:Response)=>{ console.log(error); });
    /*
    this.postservice.deletePost(deleteData.id).subscribe(Response=>{
      let index = this.posts.indexOf(deleteData);
      console.log(index);
       if(index>=0) this.posts.splice(index,1);
    }, error=>{ alert("error"); console.log(error);});*/
  }
  ngOnInit() {
    this.postservice.getPosts().subscribe(
      Response=>
      {
        console.log(Response);
        console.log(typeof(Response));
        this.posts = Response; 
        //console.log(this.posts);
      }
      ,error=>
      {
         alert("error"); console.log(error);
      });
  }

}
