import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewUpUEPage } from '../NewUpUE/NewUpUE';
import { NewUpRelationPage } from '../NewUpRelation/NewUpRelation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// permet la naviguation vers autre page celle de l'import
  constructor(public navCtrl: NavController) {

  }
// fonction qui utilise la méthode Push pour accéder à NewUpUEPage
  onGoToNewUpUE(){
    this.navCtrl.push(NewUpUEPage);
  }

  onGoToNewUpRelation(){
    this.navCtrl.push(NewUpRelationPage);
  }
}
