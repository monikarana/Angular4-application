import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-4-data-table';

import { CoursesComponent } from "./courses.component";
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { DataService } from  "./data.service";
import { IntelNavBarComponent } from './intel-nav-bar/intel-nav-bar.component';
import { AddApComponent } from './add-ap/add-ap.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    IntelNavBarComponent,
    AddApComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: GridComponent},
      { path: 'home', component: GridComponent},
      { path: 'addAP', component: AddApComponent}
  ]),
    DataTableModule,
  ],
  //we need to registor all the dependencies that component
  //in this module are dependent upon
  providers: [
    CoursesService,
    DataService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
