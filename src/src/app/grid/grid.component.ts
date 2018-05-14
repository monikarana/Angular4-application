import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  title = "Access Points";
  APs;
  constructor(service: DataService) {
    this.APs = service.getData();
  }

  ngOnInit() {
  }

}
