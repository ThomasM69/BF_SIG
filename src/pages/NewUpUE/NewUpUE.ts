import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewUEPage } from "./NewUE/NewUE";
import { UpUEPage } from "./UpUE/UpUE";



@Component({
    selector: 'page-NewUpUE',
    templateUrl: 'NewUpUE.html'
})

export class NewUpUEPage {
      constructor(public navCtrl: NavController) {
    
      }
      onGoToNewUE(){
        this.navCtrl.push(NewUEPage);
      }
      onGoToUpUE(){
        this.navCtrl.push(UpUEPage);
      }
}


