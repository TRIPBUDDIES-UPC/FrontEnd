import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {toInteger} from "lodash";
import {ServiceService} from "../../../service/service.service";

@Component({
  selector: 'app-notification-dialog-bussiness',
  templateUrl: './notification-dialog-bussiness.component.html',
  styleUrls: ['./notification-dialog-bussiness.component.css']
})
export class NotificationDialogBussinessComponent implements OnInit{

  answer: string = "";
  UserId: number = 0;
  constructor(public dialogRef: MatDialogRef<NotificationDialogBussinessComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service: ServiceService) { }

  ngOnInit(): void {
    this.UserId = toInteger(localStorage.getItem("id"));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  SendNotification(data: any) {
    let TempAnswer:object = {
      "id":0,
      "content": "This user want contact you!",
      "date": "2022-11-19T19:53:42.582Z",
      "emitter": {
        "id": this.UserId
      },
      "receiver": {
        "id": data
      }
    }
    this.service.SendNotification(TempAnswer, data, this.UserId).subscribe(response => {
      console.log(response);
    });

    this.answer = "";

    this.dialogRef.close(data);
  }
}
