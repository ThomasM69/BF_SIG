import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewUpUEPage } from '../NewUpUE/NewUpUE';
import { NewUpRelationPage } from '../NewUpRelation/NewUpRelation';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  
// permet la naviguation vers autre page celle de l'import
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('http://localhost:5050/ue').subscribe((response) => {
      console.log(response);
  });
  }
  
// fonction qui utilise la méthode Push pour accéder à NewUpUEPage
  onGoToNewUpUE(){
    this.navCtrl.push(NewUpUEPage);
  }

  onGoToNewUpRelation(){
    this.navCtrl.push(NewUpRelationPage);
  }
}
