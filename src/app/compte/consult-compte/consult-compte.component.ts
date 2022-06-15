import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from 'src/app/service/compte.service';

@Component({
  selector: 'app-consult-compte',
  templateUrl: './consult-compte.component.html',
  styleUrls: ['./consult-compte.component.css']
})
export class ConsultCompteComponent implements OnInit {
compte:any;
objectifs:any=[];
mouvements:any=[];
  constructor(private compteService:CompteService,private route:Router) { }

  ngOnInit(): void {
this.getCompte();
console.log("compte objectif")
this.getObjectifCompte();
this.getMouvementCompte()
  }

  getCompte(){
    this.compteService.getCompteByClient().subscribe(data=>{
this.compte=data;
console.log(this.compte);
    },err=>{
      console.log(err)
    });
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
  getMouvementCompte(){
    this.compteService.getMouvementCompte().subscribe(data=>{
      //@ts-ignore
      this.mouvements=data._embedded.mouvements;
      console.log(this.mouvements);
    },err=>{
console.log(err)
    });
  }
}
