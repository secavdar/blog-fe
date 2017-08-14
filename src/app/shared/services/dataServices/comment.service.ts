import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CommonList, Tag } from '../../models';

@Injectable()
export class CommentService {

    constructor(public http: Http) { }
    
}