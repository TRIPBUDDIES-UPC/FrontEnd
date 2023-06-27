import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']

})


export class TravelListComponent implements OnInit{
  title = 'angularproject';

  districts: District[] = [
    {value: 'San Miguel-0', viewValue: 'San Miguel'},
    {value: 'Magdalena-1', viewValue: 'Magdalena'},
    {value: 'Miraflores-2', viewValue: 'Miraflores'},
    {value: 'San Isidro-3', viewValue: 'San Isidro'},
    {value: 'Barranco-4', viewValue: 'Barranco'},
    {value: 'Surco-5', viewValue: 'Surco'},
    {value: 'San Borja-6', viewValue: 'San Borja'},
  ];
  preferences: Preference[] = [
    {value: 'playa-0', viewValue: 'Playa'},
    {value: 'bosque-1', viewValue: 'Bosque'},
    {value: 'treking-2', viewValue: 'Treking'},
    {value: 'aventura-3', viewValue: 'Aventura'},
    {value: 'cultura-4', viewValue: 'Cultura'},
    {value: 'gastronomia-5', viewValue: 'Gastronomia'},
    {value: 'historia-6', viewValue: 'Historia'},
    {value: 'deportes-7', viewValue: 'Deportes'},
    {value: 'relax-8', viewValue: 'Relax'},
    {value: 'vida nocturna-9', viewValue: 'Vida nocturna'},
    {value: 'compras-10', viewValue: 'Compras'},
  ];
  constructor() {

  }
  ngOnInit():void {

  }


}
interface District {
  value: string;
  viewValue: string;
}
interface Preference {
  value: string;
  viewValue: string;
}
