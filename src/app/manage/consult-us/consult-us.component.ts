import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from 'src/app/service/compte.service';

@Component({
  selector: 'app-consult-us',
  templateUrl: './consult-us.component.html',
  styleUrls: ['./consult-us.component.css']
})
export class ConsultUsComponent implements OnInit {
  clients:any;
  constructor(private compteService:CompteService,private route:Router) { }

  ngOnInit(): void {
    this.getClient();
  }

getClient(){
this.compteService.getClients().subscribe(data=>{
  //@ts-ignore
this.clients=data._embedded.clients;
console.log(this.clients);
},err=>{
console.log(err);
});
}
onDelete(id:any){
  let conf = confirm("vous etes sure?");
  if (conf) {
    this.compteService.deleteUser(id)
      .subscribe(data => {
    this.getClient();
        console.log("delete user");

      }
        , err => {
          console.log(err);
        })
  }
}
details(id:any){
this.route.navigateByUrl("/details/"+id);
}
addUser(){
  this.route.navigateByUrl("/ajouter");
}

}
