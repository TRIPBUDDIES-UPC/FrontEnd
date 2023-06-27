import {TravellerModel} from "./TravellerModel";
import {places} from "./places";

export interface ReviewsModel{
  id:number,
  traveller:TravellerModel,
  places:places,
  reviewText:string,

}
