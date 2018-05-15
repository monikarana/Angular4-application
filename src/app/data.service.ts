import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  constructor(private http: Http) { }
  apfromJSON = [];

  getData = function() {
    this.http.get("http://localhost:3000/AccessPoints").subscribe(
      (res: Response) => {
        this.apfromJSON = res.json();
        console.log("from service", this.apfromJSON);
      }
    )
    return this.apfromJSON;
  }
  getAP(APId) {
    return '{apId: "12324", apName: "testAcessPpoint", campusName: "Bangalore", campusCode: "EMB" }';
  }
}
