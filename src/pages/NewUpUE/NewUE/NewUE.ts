import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import  {Observable} from 'rxjs/Observable'


@Component({
    selector: 'page-NewUE',
    templateUrl: 'NewUE.html'
})

export class NewUEPage {

    ue= {};

    //TEST2
    // result:any= [];
    // data: Observable<any>;

    constructor( public http: HttpClient) {
    }

    // TEST1
    saveUeToServer(){
        this.http.post('http://localhost:5050/ue', this.ue, {headers: new HttpHeaders({'Content-Type':'application/json', Accept : 'application/json', Authorization:''})})
        .subscribe((response) => { console.log(response) });
    }

    //TEST2(suite)
    // postData(){
    //     let postData = new FormData();
    //     postData.append('id','classe' );
        
    //    this.data = this.http.post('http://localhost:5050/ue/', postData)
    //     this.data.subscribe
    //     (data => { console.log(data);
    //     });
    // }
}
