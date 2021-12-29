import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleApiService } from 'src/app/vehicle-api.service';
import { TokenStorageService } from '../../_services/token-storage.service';


@Component({
  selector: 'app-show-vehicle',
  templateUrl: './show-vehicle.component.html',
  styleUrls: ['./show-vehicle.component.css']
})
export class ShowVehicleComponent implements OnInit {

  constructor(private service:VehicleApiService, private token: TokenStorageService) { 
}

  vehicleList$:any=[];

  vehicletypesList$!:Observable<any[]>;

  vehicletypesList:any=[];
  currentUser: any;
  check:any;
  income: any;
  vehicletypesMap:Map<number, string> = new Map()

  vehicleId:number = 0;
  boarding:boolean = false;
  battery:boolean = false;
  fuel:boolean = false;
  review:boolean = false;

  ngOnInit(): void {

    this.vehicleList$ = this.service.getVehicleList();
    this.vehicletypesList$ = this.service.getVehicletypesList();
    this.refreshVehicletypesMap();
    this.viewCheck();
    this.refuel;
    this.recharge;
    this.reviewx;
    this.boarding;
    this.currentUser = this.token.getUser().id;
    this.income = this.Income();
  }


  Income() {

    var data = {
      Employeeid:this.currentUser.id
    }

    this.service.getIncome(data).subscribe(res => {
      this.income = res;
    });
  }

  refuel(id:number){
    var data = {
      Id:id
    }
    this.service.Refuel(data).subscribe(res => {
      this.vehicleList$ = this.service.getVehicleList();

    });
  }
  recharge(id:number){
    var data = {
      Id:id
    }
    this.service.Recharge(data).subscribe(res => {
      this.vehicleList$ = this.service.getVehicleList();

    });
  }
  reviewx(id:number){
    var data = {
      Id:id
    }
    this.service.Review(data).subscribe(res => {
      this.vehicleList$ = this.service.getVehicleList();

    });
  }
  boardingx(id:number){
    var data = {
      vehicleid:id,
      employeeid:this.currentUser
    }
    this.service.Boarding(data).subscribe(res => {
      this.vehicleList$ = this.service.getVehicleList();
      this.income = this.Income();

    });
  }


  viewCheck() {

    var data = {
      vehicleid:this.vehicleId,
      boarding:this.boarding,
      battery:this.battery,
      fuel:this.fuel,
      review:this.review
    }

    var id:number = this.vehicleId;
    this.service.Check(id, data).subscribe(res => {
      this.check = res;
    });
  }
  
  refreshVehicletypesMap(){
    this.service.getVehicletypesList().subscribe(data => {
      this.vehicletypesList = data;
      for(let i = 0; i < data.length; i++)
      {
        this.vehicletypesMap.set(this.vehicletypesList[i].id, this.vehicletypesList[i].name);
      }
    })
  }
}