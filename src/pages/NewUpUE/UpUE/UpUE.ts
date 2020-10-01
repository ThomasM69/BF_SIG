import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'page-UpUE',
    templateUrl: 'UpUE.html'
})
export class UpUEPage {
    listUE= [];

    constructor( public http: HttpClient) {
    }

    getUeList(){
        this.http.get('http://localhost:5050/ue/').subscribe((response:any) => {
            console.log(response);
            this.listUE = response;
        });
    }


}