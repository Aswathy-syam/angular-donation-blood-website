
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usersSchema } from '../modules/users/users.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

base_url:string='http://localhost:5000'

  constructor(private http:HttpClient) { }


   // to get donor details

getallDoners(){
 return this.http.get(`${this.base_url}/users`)
 
}

// add doner

addDoner(doner:usersSchema){
return this.http.post(`${this.base_url}/users`,doner)
}


// single user
getSingledoner(id:any){
 return this.http.get(`${this.base_url}/users/${id}`)

}
//update user

updateDoner(id:any,data:usersSchema){
 return this.http.put(`${this.base_url}/users/${id}`,data)
}

// delete

deleteDoners(id:any){
 return this.http.delete(`${this.base_url}/users/${id}`)
}

//view
viewDoner(id:any,data:usersSchema){
  this.http.put(`${this.base_url}/users/${id}`,data)
}

}
