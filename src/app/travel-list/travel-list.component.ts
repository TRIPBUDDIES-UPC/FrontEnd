import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
})


export class TravelListComponent implements OnInit{
  title = 'angularproject';
  addElements(){
    Swal.fire({
      icon: 'success',
      title: 'Element added',
      showConfirmButton: false,
      timer: 1500
    })
  }

  constructor() {
  }
  ngOnInit():void {

  }

}
