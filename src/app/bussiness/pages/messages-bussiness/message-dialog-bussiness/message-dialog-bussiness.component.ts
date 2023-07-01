import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { toInteger } from 'lodash';
import {ServiceService} from "../../../service/service.service";

@Component({
  selector: 'app-message-dialog-bussiness',
  templateUrl: './message-dialog-bussiness.component.html',
  styleUrls: ['./message-dialog-bussiness.component.css']
})
export class MessageDialogBussinessComponent implements OnInit {
  answer: string = "";
  UserId: number = 0;
  constructor(public dialogRef: MatDialogRef<MessageDialogBussinessComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service: ServiceService) { }

  ngOnInit(): void {
    this.UserId = toInteger(localStorage.getItem("id"));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  SendMessage(data: any) {
    let TempAnswer:object = {
      "id":0,
      "message": this.answer,
      "emitter": {
        "id": this.UserId
      },
      "receiver": {
        "id": data
      }
    }

    console.log(this.UserId)
    console.log(data)

    this.service.SendMessage(TempAnswer, data, this.UserId).subscribe(response => {
      console.log(response);
    });

    this.answer = "";

    this.dialogRef.close(data);
  }
}
