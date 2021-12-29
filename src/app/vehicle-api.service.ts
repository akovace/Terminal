import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleApiService {

  readonly vehicleAPIUrl = "https://localhost:7278/api";

  constructor(private http:HttpClient) { }

  getVehicleList():Observable<any[]> {
    return this.http.get<any>(this.vehicleAPIUrl + '/Check')
  }

  getSalary(data:any) {
    return this.http.post<any>(this.vehicleAPIUrl + '/Check/salary', data)
  }

  getIncome(data:any) {
    return this.http.post<any>(this.vehicleAPIUrl + '/Check/income', data)
  }

  Refuel(data:any) {
    return this.http.post<any>(this.vehicleAPIUrl + '/Check/refuel', data)
  }

  Recharge(data:any) {
    return this.http.post<any>(this.vehicleAPIUrl + '/Check/recharge', data)
  }

  Review(data:any) {
    return this.http.post<any>(this.vehicleAPIUrl + '/Check/review', data)
  }

  Boarding(data:any) {
    return this.http.post<any>(this.vehicleAPIUrl + '/Check/boarding', data)
  }

  getFreeplacesList():Observable<any[]> {
    return this.http.get<any>(this.vehicleAPIUrl + '/Check/freeplaces')
  }



  addVehicle(data:any) {
    return this.http.post(this.vehicleAPIUrl + '/vehicles', data)
  }
  
  updateVehicle(id:any, data:any) {
    return this.http.put(this.vehicleAPIUrl + '/vehicles/${id}' , data)
  }
  
  deleteVehicle(data:any) {
    return this.http.delete(this.vehicleAPIUrl + '/vehicles/${id}')
  }

  getVehicletypesList():Observable<any[]> {
    return this.http.get<any>(this.vehicleAPIUrl + '/vehicletypes')
  }
  addVehicletypes(data:any) {
    return this.http.post(this.vehicleAPIUrl + '/vehicletypes', data)
  }
  
  updateVehicletypes(id:any, data:any) {
    return this.http.put(this.vehicleAPIUrl + '/vehicletypes/${id}' , data)
  }
  
  deleteVehicletypes(data:any) {
    return this.http.delete(this.vehicleAPIUrl + '/vehicletypes/${id}')
  }

  getPricing():Observable<any[]> {
    return this.http.get<any>(this.vehicleAPIUrl + '/pricings')
  }
  addPricing(data:any) {
    return this.http.post(this.vehicleAPIUrl + '/pricings', data)
  }
  
  updatePricing(id:any, data:any) {
    return this.http.put(this.vehicleAPIUrl + '/pricings/${id}' , data)
  }
  
  deletePricing(data:any) {
    return this.http.delete(this.vehicleAPIUrl + '/pricings/${id}')
  }


  Check(id:any, data:any) {
    return this.http.get(this.vehicleAPIUrl + '/check/${id}' , data)
  }

  getCheckList():Observable<any[]> {
    return this.http.get<any>(this.vehicleAPIUrl + '/Check')
  }

}
