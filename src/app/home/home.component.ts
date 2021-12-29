import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { VehicleApiService } from 'src/app/vehicle-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private service:VehicleApiService, private userService: UserService) { }

  freeplacesList$:any=[];

  ngOnInit(): void {
    this.freeplacesList$ = this.service.getFreeplacesList();
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}