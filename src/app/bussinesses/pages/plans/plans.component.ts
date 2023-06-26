import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCardDialogComponent } from '../add-card-dialog/add-card-dialog.component';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCardDialogComponent, {
      width: '600px',
      height: '500px',      
      data: { /* Puedes pasar datos adicionales al diálogo si es necesario */ }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Puedes realizar acciones después de que el diálogo se haya cerrado, si es necesario
    });
  }
  
}
