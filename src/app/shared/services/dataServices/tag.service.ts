import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CommonList, Tag } from '../../models';

@Injectable()
export class TagService {

  constructor(public http: Http) { }

  public getBasicList() : Observable<CommonList[]> {
    return this.http.get('Tags/Basic').map((response: Response) => {
      return response.json();
    });
  }

  public getFullList() : Observable<Tag[]> {
    return this.http.get('Tags').map((response: Response) => {
      return response.json();
    });
  }

  public delete(id: number): Observable<boolean> {
    return this.http.delete('Tags/' + id.toString()).map((response: Response) => {
      return response.json();
    });
  }

  public save(data: Tag): Observable<boolean> {
    if (!!data.id) {
      return this.put(data.id, data);
    }
    else {
      return this.post(data);
    }
  }

  private post(data: Tag) : Observable<boolean> {
    return this.http.post('Tags', data).map((response: Response) => {
      return response.json();
    });
  }

  private put(id: number, data: Tag) : Observable<boolean> {
    return this.http.put('Tags/' + id.toString(), data).map((response: Response) => {
      return response.json();
    });
  }
}