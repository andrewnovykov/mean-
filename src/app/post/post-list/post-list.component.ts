import { Component, Input } from '@angular/core';

import { Post } from './../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html'
})



export class PostListComponent {
  // posts = [
  //   {title: 'first post', content: 'content of first post'},
  //   {title: 'second post', content: 'content of second post'}
  // ];

 @Input() posts: Post[] = [];
}
