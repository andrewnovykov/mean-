import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from './../post.model';
import { PostService } from './../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html'
})



export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'first post', content: 'content of first post'},
  //   {title: 'second post', content: 'content of second post'}
  // ];

 posts: Post[] = [];
 private postsSub: Subscription ;


 constructor(public postService: PostService) {  }

  ngOnInit() {
    this.postService.getPost();
    this.postsSub = this.postService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }




}
