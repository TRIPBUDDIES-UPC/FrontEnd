import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  get nativeWindow(): any {
    return getWindow();
  }



  constructor(private router: Router) {
  }

  redirectToPage() {
    window.open("https://tripbuddies-upc.github.io/Landing-Page/", "_blank");
  }
}
function getWindow(): any {
  return window;
}
