import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ShowVehicleComponent } from './vehicle/show-vehicle/show-vehicle.component';
import { AddEditVehicleComponent } from './vehicle/add-edit-vehicle/add-edit-vehicle.component';
import { VehicleApiService } from './vehicle-api.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    ShowVehicleComponent,
    AddEditVehicleComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VehicleApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
