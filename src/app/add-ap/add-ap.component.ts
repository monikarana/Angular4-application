// import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-add-ap',
  templateUrl: './add-ap.component.html',
  styleUrls: ['./add-ap.component.css']
})
export class AddApComponent implements OnInit {
  title = "Add newAP"
  confirmationString:string = "New Access Point has been added";
  isAdded: boolean = false;
  apObj:object = {};
  constructor( private http : Http ) {}

  addNewAP = function(ap) {
    console.log("add ap method");
    this.apObj = {
      "id": ap.id,
      "apId": ap.apId,
      "apName": ap.apName,
      "campusName": ap.campusName,
      "campusCode": ap.campusCode
    }
    console.log( this.apObj);

    this.http.post("http://localhost:3000/AccessPoints/", this.apObj).subscribe((res:Response) => {
      this.isAdded = true;
    })
  }

  ngOnInit() {
    console.log("this is add-ap");
  }

}
