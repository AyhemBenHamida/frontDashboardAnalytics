import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  public host:String="http://localhost:1920/"
  constructor(private http:HttpClient) { }
  public getobjectifs(){
    return this.http.get(this.host+"objectifs")
  }
  public PostObjectif(form:any){
    return this.http.post(this.host+"objectifs",form);
  }
  public deleteobjectif(id:any){
    return this.http.delete(this.host+"objectifs/"+id);
  }
  public PutObjectif(form:any){
    return this.http.put(this.host+"objectifs",form);
  }
  
public getCompteByClient(){
  return this.http.get(this.host+"comptes/"+4)
}

public getObjectifCompte(){
  return this.http.get(this.host+"comptes/"+4+"/objectifs");
}
public getMouvementCompte(){
  return this.http.get(this.host+"comptes/"+4+"/mouvements");
}
public getClients(){
 return this.http.get(this.host+"clients");
}
public deleteUser(id:any){
  return this.http.delete(this.host+"users/"+id);
}

public getpie(){
  return this.http.get(this.host+"pieChart/"+4)
}
public getbar(){
  return this.http.get(this.host+"pieChart/"+4)
}
public getLine(){
  return this.http.get(this.host+"pieChart/"+4)
}

}
