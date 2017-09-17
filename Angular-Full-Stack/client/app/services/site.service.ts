import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from '../services/auth.service';

@Injectable()
export class SiteService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private auth: AuthService) { }

  getSites(): Observable<any> {
    return this.http.get('/api/sites').map(res => res.json());
  }

  countSites(): Observable<any> {
    return this.http.get('/api/sites/count').map(res => res.json());
  }

  addSite(site): Observable<any> {
    return this.http.post('/api/site/' + this.auth.currentUser._id, JSON.stringify(site), this.options);
  }

  getSite(site): Observable<any> {
    return this.http.get(`/api/site/${site._id}`).map(res => res.json());
  }

  editSite(site): Observable<any> {
    return this.http.put(`/api/site/${site._id}/`  + this.auth.currentUser._id, JSON.stringify(site), this.options);
  }

  deleteSite(site): Observable<any> {
    return this.http.delete(`/api/site/${site._id}/`  + this.auth.currentUser._id, this.options);
  }

}
