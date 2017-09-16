import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AlgorithmService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  
  constructor(private http: Http) { }

  getAlgorithms(user): Observable<any> {
    return this.http.get('/api/algorithms/' + user._id).map(res => res.json());
  }

  countAlgorithms(): Observable<any> {
    return this.http.get('/api/algorithms').map(res => res.json());
  }

  addAlgorithm(algorithm): Observable<any> {
    return this.http.post('/api/algorithm', JSON.stringify(algorithm), this.options);
  }

  getAlgorithm(algorithm): Observable<any> {
    return this.http.get(`/api/algorithm/${algorithm._id}`).map(res => res.json());
  }

  editAlgorithm(algorithm): Observable<any> {
    return this.http.put(`/api/algorithm/${algorithm._id}`, JSON.stringify(algorithm), this.options);
  }

  deleteAlgorithm(algorithm): Observable<any> {
    return this.http.delete(`/api/algorithm/${algorithm._id}`, this.options);
  }

}
