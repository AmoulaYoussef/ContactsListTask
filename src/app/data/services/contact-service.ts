import { EventEmitter, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Icontact } from '../interfaces/Icontact';
import { contact } from '../classes/contact';


@Injectable()
export class ContactService {
    public alphabetics = [
        { name: 'A' },
        { name: 'B' },
        { name: 'C' },
        { name: 'D' },
        { name: 'E' },
        { name: 'F' },
        { name: 'G' },
        { name: 'H' },
        { name: 'I' },
        { name: 'J' },
        { name: 'K' },
        { name: 'L' },
        { name: 'M' },
        { name: 'N' },
        { name: 'O' },
        { name: 'P' },
        { name: 'Q' },
        { name: 'S' },
        { name: 'T' },
        { name: 'U' },
        { name: 'V' },
        { name: 'W' },
        { name: 'X' },
        { name: 'Y' },
        { name: 'Z' },
    ];
    public contactsFilled = new Subject<Icontact[]>();
    private contacts: Icontact[];
    contactsToView: any;
    msgError: any;
    constructor(private http: Http) {
        this.contacts = [];
    }
    public getAll() {
        return this.http.get('./assets/datajsonfile/contacts.json')
            .map((respose: Response) => this.contactsFilled = respose.json().data)
            .catch(this.handleError);

    }

    private handleError(error: any) {
        const msg = `Statue code ${error.status} on ${error.url}`;
        console.log(msg);
        return Observable.throw(msg);
    }
    public Add(contacts: Icontact[]) {
        this.contacts.push(...contacts);
        console.log(this.contacts);
        console.log(this.contactsFilled);
    }

}
