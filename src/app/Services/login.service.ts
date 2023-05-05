import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import   'firebase/compat/auth'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token:any;

  constructor(private cookies:CookieService,private route :Router) {
   }

   
   login(email:string,password:string){
     firebase.auth().signInWithEmailAndPassword(email,password).then( 
      response=>{
     firebase.auth().currentUser?.getIdToken().then(
       token=>{
             this.token=token;
             this.cookies.set("token",this.token)
             this.route.navigate(['/home']);
              }
           )
          }
         )
   }
getidtoken(){
  return this.cookies.get(this.token);
}



createuser(email:string,password:string){
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    firebase.auth().currentUser?.getIdToken().then(
      token=>{
            this.token=token;
            this.cookies.set("token",this.token)
            this.route.navigate(['/login']);
             }
          )
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

logout(){
  firebase.auth().signOut().then(
    ()=>{
      this.token="";
      this.cookies.set("token",this.token)
      this.route.navigate(['/login']);
    }
  )
}





}
