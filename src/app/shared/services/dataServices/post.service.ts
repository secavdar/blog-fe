import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CommonList } from '../../models';

@Injectable()
export class PostService {
    constructor(public http: Http) { }
}