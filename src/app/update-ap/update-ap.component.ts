import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update-ap',
  templateUrl: './update-ap.component.html',
  styleUrls: ['./update-ap.component.css']
})
export class UpdateApComponent implements OnInit {

  id:number;
  data:object = {};
  APs = [];
  exist = false;
  apObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  updateAP(ap) {
    this.apObj = {
      "id": ap.id,
      "apId": ap.apId,
      "apName": ap.apName,
      "campusName": ap.campusName,
      "campusCode": ap.campusCode
    };
    const url = `${"http://localhost:3000/AccessPoints"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.apObj), {headers: this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:3000/AccessPoints").subscribe(
      (res: Response) => {
        this.APs = res.json();
        for(var i = 0; i < this.APs.length ; i++) {
          if(parseInt(this.APs[i].id) === this.id) {
            this.exist = true;
            this.data = this.APs[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }

}
