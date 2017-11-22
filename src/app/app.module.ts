import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HealthCenterHubComponent } from './health-center-hub/health-center-hub.component';
import { HealthCenterListComponent } from './health-center-list/health-center-list.component';
import { HealthCenterDetailComponent } from './health-center-detail/health-center-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HealthCenterHubComponent,
    HealthCenterListComponent,
    HealthCenterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
