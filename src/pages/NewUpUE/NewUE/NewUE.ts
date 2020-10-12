import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import  {Observable} from 'rxjs/Observable'


@Component({
    selector: 'page-NewUE',
    templateUrl: 'NewUE.html'
})

export class NewUEPage {

    ue= {};

    constructor( public http: HttpClient) {
    }

    saveUeToServer(){
        this.http.post('http://localhost:5050/ue', this.ue, {headers: new HttpHeaders({'Content-Type':'application/json', Accept : 'application/json', Authorization:''})})
        .subscribe((response) => { console.log(response )});
    }
}
