import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  title = 'angularproject';
  alertWithSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Successfully added',
      showConfirmButton: false,
      timer: 2000
    })

  }
  alertWithDelete(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'The person has been deleted.',
          'success'
        )
      }
    })
  }


}
