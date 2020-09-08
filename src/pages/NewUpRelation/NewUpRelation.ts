import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewRelationPage } from "./NewRelation/NewRelation";
import { UpRelationPage } from "./UpRelation/UpRelation";


@Component({
    selector: 'page-NewUpRelation',
    templateUrl: 'NewUpRelation.html'
})

export class NewUpRelationPage {
    constructor(public navCtrl: NavController) {
    
    }
    onGoToNewRelation(){
      this.navCtrl.push(NewRelationPage);
    }
    onGoToUpRelation(){
        this.navCtrl.push(UpRelationPage);
      }
}