import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://localhost:7278/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'Vehicles', { responseType: 'text' });
  }
  getVehicleList():Observable<any[]> {
    return this.http.get<any>(API_URL + '/vehicles')
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'Employees', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'Sailingschedules', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'Traffic', { responseType: 'text' });
  }
}