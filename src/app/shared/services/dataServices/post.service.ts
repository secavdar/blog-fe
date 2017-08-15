import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CommonList, Post } from '../../models';

@Injectable()
export class PostService {

    constructor(public http: Http) { }

    public activeList(): Observable<Post[]> {
        return this.http.get('Posts/Active').map((response: Response) => {
            return response.json();
        });
    }

    public fullList() : Observable<Post[]> {
        return this.http.get('Posts').map((response: Response) => {
            return response.json();
        });
    }

    public changeState(id: number): Observable<boolean> {
        return this.http.put("Posts/State/" + id.toString(), null).map((response: Response) => {
            return response.json();
        });
    }

    public save(data: Post) {
        if (!!data.id) {
            return this.put(data.id, data);
        }
        else {
            return this.post(data);
        }
    }

    private post(data: Post) {
        return this.http.post("Posts", data).map((response: Response) => {
            return response.json();
        });
    }

    private put(id: number, data: Post) {
        return this.http.put("Posts/" + id.toString(), data).map((response: Response) => {
            return response.json();
        });
    }
}