import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin:any=false;
  public host:String="http://localhost:1920/"

  constructor(private http:HttpClient,private route:Router) { }
admin:boolean=false;
  public login(data:any){
    return this.http.post(this.host+"signin",data);
  }

  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  getToken(){
    return localStorage.getItem('token')
  }





  logOut(){
    localStorage.removeItem('token')
this.route.navigateByUrl("/signin")
this.isAdmin=false
  }

  tokenExist():any{
    if( localStorage.getItem('token')!=null) 
      return true
    }

getAdmin(){
  if(  localStorage.getItem('token')!==null){
    let tt:any=  localStorage.getItem('token')
       let tableRole= JSON.parse(atob(tt.split('.')[1])).roles //to get the roles table from token
 
         for(var i=0;i<tableRole.length;i++){
         if(tableRole[i].authority==='ROLE_ADMIN')  {
           this.isAdmin=true;
           
           break;
         }    
         }  
     }
     return this.isAdmin;
}

}
