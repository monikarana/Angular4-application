import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-4-data-table';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DataService } from  "./data.service";
import { IntelNavBarComponent } from './intel-nav-bar/intel-nav-bar.component';
import { AddApComponent } from './add-ap/add-ap.component';
import { GridComponent } from './grid/grid.component';
import { UpdateApComponent } from './update-ap/update-ap.component';

@NgModule({
  declarations: [
    AppComponent,
    IntelNavBarComponent,
    AddApComponent,
    GridComponent,
    UpdateApComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: GridComponent},
      { path: 'addAP/:id', component: AddApComponent},
      { path: 'home', component: GridComponent},
      { path: 'addAP', component: AddApComponent},
      { path: 'updateAP/:id', component: UpdateApComponent}
  ]),
    DataTableModule,
  ],
  //we need to registor all the dependencies that component
  //in this module are dependent upon
  providers: [
    DataService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
