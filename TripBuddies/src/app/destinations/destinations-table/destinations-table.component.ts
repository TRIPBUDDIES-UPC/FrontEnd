import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { Destination } from "../models/destination.model";
import {NgForm} from "@angular/forms";
import {DestinationDataService} from "../services/destination-data.service";
import {AddDestinationDialogComponent} from "../add-destination-dialog/add-destination-dialog.component";
import * as _ from "lodash";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-destinations-table',
  templateUrl: './destinations-table.component.html',
  styleUrls: ['./destinations-table.component.css']
})
export class DestinationsTableComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild('destinationForm', {static: true})
  destinationForm !: NgForm;

  destinationData!: Destination;

  dataSource = new MatTableDataSource();
  displayedColumns = ['name', 'image', 'location', 'price', 'country', 'rating', 'actions'];

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  isEditMode = false;

  constructor(private destinationDataService: DestinationDataService, private router: Router,
              private dialog:MatDialog) {
    this.destinationData = {} as Destination;
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getAllDestinations();
  }

  getAllDestinations() {
    this.destinationDataService.getList().subscribe((response: any) => {
      this.dataSource = response;
    })
  }

  editItem(element: any) {
    this.destinationData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.destinationForm.resetForm();
  }

  deleteItem(id: string) {
    this.destinationDataService.deleteItem(id).subscribe((reponse: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: any) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  createDestination() {
    this.destinationData.id = 0;
    this.destinationDataService.createItem(this.destinationData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => {
        return o;
      });
    });
  }

  updateDestination() {
    this.destinationDataService.updateItem(this.destinationData.id, this.destinationData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: any) => {
        if (o.id == response.id) {
          o = response;
        }
        return o;
      });
    });

  }
  viewReviews(id: any){
    this.router.navigate(['destinations/', id, 'reviews']);
  }
  openDialog(){
    const dialogRef = this.dialog.open(AddDestinationDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result){
      this.dataSource.data.push({...result});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
      console.log(`Dialog result: ${result}`);
      this.getAllDestinations()
      }
    });
  }
}
