import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  getData() {
  var APs = [
  			{apId: "12323", apName: "testAcessPpoint", campusName: "Bangalore", campusCode: "EMB" },
  			{apId: "12323", apName: "testAcessPpoint", campusName: "Bangalore", campusCode: "EMB" },
  			{apId: "12323", apName: "testAcessPpoint", campusName: "Bangalore", campusCode: "EMB" },
  	];
    return APs;
  }
}
