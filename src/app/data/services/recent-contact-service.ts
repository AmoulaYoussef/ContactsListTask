import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Irecentcontact } from "../interfaces/Irecentcontact";


@Injectable()
export class RecentContactService {

    //  public recipeClicked = new Subject<Irecentcontact>();
    public recentcontactsFilled = new Subject<Irecentcontact[]>();


    constructor(private http: Http) { }
    public getAll() {
        return this.http.get('./assets/datajsonfile/recent-contact.json')
            .map((respose: Response) => this.recentcontactsFilled=respose.json().data)
            .catch(this.handleError);
    }
    private handleError(error: any) {
        let msg = `Statue code ${error.status} on ${error.url}`
        console.log(msg);
        return Observable.throw(msg);
    }
    // public add(recentcontact: Irecentcontact) {
    //     this.recentcontactsFilled.push(recentcontact);
    // }



}
