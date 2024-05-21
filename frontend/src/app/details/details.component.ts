import { Component, OnInit } from '@angular/core';
import { usersSchema } from '../modules/users/users.model';
import { ServiceService } from '../services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


allDoners:usersSchema[]=[]
searchKey:string=''

constructor(private api:ServiceService){}
  ngOnInit(): void {
    this.getallDonerslist()
  }


  getallDonerslist(){
this.api.getallDoners().subscribe({
  next:(res:any)=>{
    console.log(res);
    this.allDoners=res
  },
  error:(err:any)=>{
    console.log(err);
    
  }
})
  }


// delete

deleteDoner(id:any){
  this.api.deleteDoners(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.getallDonerslist()

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });


    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}


}
