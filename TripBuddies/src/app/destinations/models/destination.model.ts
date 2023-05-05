import {Review} from "./review.model";

export interface Destination {
  id: any;
  companyId: any;
  name: any;          //Show
  image: any;         //Show
  location: any;      //Show
  description: any;
  price: any;         //Show
  activities: any;
  duration: any;
  country: any;       //Show
  rating: any;        //Show
  reviews: Review[];
}
