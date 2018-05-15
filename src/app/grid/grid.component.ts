import { DataService } from '../data.service';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  constructor(private http: Http) { }
  title = "Access Points";
  APs;
  //to fetch data from json file using http call
  getData = function() {
    this.http.get("http://localhost:3000/AccessPoints").subscribe(
      (res: Response) => {
        this.APs = res.json();
        console.log("from service", this.apfromJSON);
      }
    )
  }

  deleteAP = function (id) {
    if(confirm("Are you sure?")) {
      const url = `${"http://localhost:3000/AccessPoints"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then(() => {
        this.getData();
        })
    }
  }

  ngOnInit() {
    this.getData();
  }
}
