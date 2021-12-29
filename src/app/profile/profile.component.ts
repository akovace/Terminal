import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { VehicleApiService } from 'src/app/vehicle-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  salary: any;
  constructor(private token: TokenStorageService, private service:VehicleApiService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.salary = this.Salary();
  }

  Salary() {

    var data = {
      Employeeid:this.currentUser.id
    }

    this.service.getSalary(data).subscribe(res => {
      this.salary = res;
    });
  }

}
