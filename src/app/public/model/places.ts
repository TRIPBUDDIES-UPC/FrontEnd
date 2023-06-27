import {BussinessModel} from "./BussinessModel";

export interface places{
id: number,
description: string;
name:string;
price:number;
  imageUrl:string;
location:string;
country:string;

favorite:boolean;
  bussiness:BussinessModel;
}
