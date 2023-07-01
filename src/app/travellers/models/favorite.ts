import {Traveller} from "./traveller";
import {Places} from "../../bussiness/model/places";

export interface Favorite {
  id: number;
  traveller: Traveller;
  places: Places;
}
