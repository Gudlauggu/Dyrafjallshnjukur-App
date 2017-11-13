import { Injectable } from '@angular/core';
import {Video} from './video.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const url = environment.apiEndpoint + '/video';
@Injectable()
export class VideoService {

  constructor(private http: HttpClient) { }

  get(): Observable<Video[]> {
  return this.http
    .get<Video[]>(url);
  }

  getById(id: number): Observable<Video> {
    return this.http
      .get<Video>(url + '/' + id);
  }

  delete(id: number): Observable<Video>{
    return this.http
      .delete<Video>(url + '/' + id);
  }

}
