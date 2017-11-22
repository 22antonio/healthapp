import { Injectable } from '@angular/core';
import {HealthCenter} from './health-center';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HealthCenterService {

  private _getUrl = "/api/healthcenters";
  private _postUrl = "/api/healthcenter";
  private _putUrl = "/api/healthcenter/";
  private _deleteUrl = "/api/healthcenter/";

  constructor(private _http: Http) { }

  getHealthCenters() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addHealthCenter(healthCenter: HealthCenter) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(healthCenter), options)
      .map((response: Response) => response.json());
}

  updateHealthCenter(healthCenter: HealthCenter) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + healthCenter._id, JSON.stringify(healthCenter), options)
      .map((response: Response) => response.json());
  }

  deleteHealthCenter(healthCenter: HealthCenter) {
    return this._http.delete(this._deleteUrl + healthCenter._id)
      .map((response: Response) => response.json());
  }

}