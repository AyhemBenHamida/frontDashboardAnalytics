import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'DashboardAngular';

  isAdmin:any=false;
  constructor(private route:Router,public auth:AuthService){}
  
  ngOnInit(): void { 
  
  }

  

  
}
