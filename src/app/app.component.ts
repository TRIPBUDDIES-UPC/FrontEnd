import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TpTripBuddies';
  Type :String = '';
ngOnInit(): void {
    
firebase.initializeApp({
  apiKey: "AIzaSyD4KrpFKHeJQ5bXSOo7reqqOTvlv8vzY9Y",
  authDomain: "tripbuddies-f7f59.firebaseapp.com",
});
}
  
}
