import { Component } from '@angular/core';
import { usersSchema } from '../users.model';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent {
  constructor(private api:ServiceService,private route:Router){}

  doner:usersSchema={}


  addDoners(){
const{id,name,mobile,blood,image,place}=this.doner

if(!id||!name||!mobile||!blood||!image||!place){
  // alert('please fill the form completely')

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });




}
else{
  // alert('succeffully added')
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "successfully added",
    showConfirmButton: false,
    timer: 1500
  });


 this.api.addDoner(this.doner).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.route.navigateByUrl('/donors')
    
  },
  error:(err:any)=>{
    console.log(err);
    
  }
 })
}
  }
}
