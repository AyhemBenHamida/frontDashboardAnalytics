import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompteService } from 'src/app/service/compte.service';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {
  objectifFormGroup?: FormGroup;
  submited:boolean=false;
  constructor(private compteService:CompteService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {


    this.objectifFormGroup = this.fb.group({
      titre: ["",Validators.required],
      description: ["",Validators.required],
      montantEpargne: ["",Validators.required]


    });
  }

    add_objectif() {
      this.submited=true;
      if(this.objectifFormGroup?.invalid)return;
          this.compteService.PostObjectif(this.objectifFormGroup?.value)
            .subscribe((data:any) => {
              alert(" objectif crée avec succés");
              this.router.navigateByUrl("/consultObjectif");
      
            }, err => {
              console.log(err);
            });
      
        }
        cancel() {
          this.router.navigateByUrl("/consultObjectif");
          console.log("return to view consulte")
        }
      
      
  }


