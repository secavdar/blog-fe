import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CommentService, PostService, TagService } from './dataServices';

@Injectable()
export class DataService {

  public comment: CommentService = new CommentService(this.http);
  public post: PostService = new PostService(this.http);
  public tag: TagService = new TagService(this.http);

  constructor(public http: Http) { }
}