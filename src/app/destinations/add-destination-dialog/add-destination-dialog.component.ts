import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import {Destination} from "../models/destination.model";
import {DestinationDataService} from "../services/destination-data.service";
@Component({
  selector: 'app-add-destination-dialog',
  templateUrl: './add-destination-dialog.component.html',
  styleUrls: ['./add-destination-dialog.component.css']
})
export class AddDestinationDialogComponent implements OnInit{

  @ViewChild('destinationForm', {static:false})
  destinationForm !: NgForm
  destinationData!: Destination;

  constructor(
    private destinationDataService:DestinationDataService,
    public dialogRef: MatDialogRef<AddDestinationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {   this.destinationData = {} as Destination; }

  ngOnInit(): void {
  }

  addStudent() {
    this.destinationData.id = 0;
    this.destinationDataService.createItem(this.destinationData).subscribe((response: any) => {
      this.dialogRef.close(response)
    });
  }
  onSubmit() {
    if (this.destinationForm.form.valid) {
      console.log('valid');
      console.log('about to create');
      this.addStudent();
    }
    else {
      console.log('Invalid data');
    }
  }
}
