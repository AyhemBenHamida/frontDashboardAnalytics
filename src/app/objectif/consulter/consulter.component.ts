import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from 'src/app/service/compte.service';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {

  constructor(private compteService:CompteService,private route:Router) { }
objectifs:any
  ngOnInit(): void {
    
    this.getObjectifCompte();
  }
  getObjectifCompte(){
    this.compteService.getObjectifCompte().subscribe(data=>{
      //@ts-ignore
      this.objectifs=data._embedded.objectifs;
      console.log(this.objectifs)
    },err=>{
console.log(err)
    });
  }
  add_objectif(){
this.route.navigateByUrl("/creatObjectif")
  }
  modify(id:any){
    this.route.navigateByUrl("/modifyObjectif/"+id)
  }
  deleteObjectif(id:any){
    let conf = confirm("vous etes sure?");
    if (conf) {
      this.compteService.deleteobjectif(id)
        .subscribe(data => {
      this.getObjectifCompte();
          console.log("delete objectif");

        }
          , err => {
            console.log(err);
          })
    }

  }

 

}
