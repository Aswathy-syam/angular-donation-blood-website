import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { usersSchema } from '../users.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  doner:usersSchema={}

constructor(private route:ActivatedRoute,private api:ServiceService){}
  ngOnInit(): void {
    this.singleUser(this.doner.id)
  }

// single user
singleUser(id:any){
this.route.params.subscribe((res:any)=>{
  console.log(res);
  const{id}=res
  console.log(id);
  
this.api.getSingledoner(id).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.doner=res
  },
  error:(err:any)=>{
    console.log(err);
    
  }
})



})
}




}
