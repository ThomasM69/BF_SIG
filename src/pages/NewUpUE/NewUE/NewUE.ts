import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'page-NewUE',
    templateUrl: 'NewUE.html'
})


export class NewUEPage {
     ue = {};

    constructor( public http: HttpClient) {
    }

    saveUeToServer(){
        this.http.post('http://localhost:5050/ue', this.ue)
        .subscribe(
        () => {
            console.log()
        });
    }

}  