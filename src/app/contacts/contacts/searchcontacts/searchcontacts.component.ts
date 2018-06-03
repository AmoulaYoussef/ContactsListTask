import { Component, OnInit, Output, Input } from '@angular/core';

import { Icontact } from '../../../data/interfaces/Icontact';
import { IcontactsGrouped } from '../../../data/interfaces/IcontactsGrouped';
import { ContactService } from '../../../data/services/contact-service';

@Component({
  selector: 'app-searchcontacts',
  templateUrl: './searchcontacts.component.html',
  styleUrls: ['./searchcontacts.component.css']
})
export class SearchcontactsComponent implements OnInit {
  result: { letter: string; contacts: any[]; }[];
  newdata: Icontact[];
  @Input() data: Icontact[];
  contactsGroupedToView: IcontactsGrouped[];
  dataFiltered: Icontact[];
  msgError: any;
  contacts: Icontact[];


  constructor(private contactServices: ContactService) { }

  ngOnInit() {
    this.newdata = this.data.filter(item => item.firstName !== null);
    this.contactsGroupedToView = this.groupByCategory(this.newdata);
    console.log(this.contactsGroupedToView);

  }
  public groupByCategory(data: Array<any>): IcontactsGrouped[] {
    if (data.length === 1 ) {
      this.result = Array.from(data).map(
        x => ({
         letter: x.letter,
         contacts: x.contacts,
      }));
    } else {
       this.result = Array.from(this.contactServices.alphabetics).map(
        x => ({
          letter: x.name,
          contacts: Array.from(data)
            .filter((item) => item.firstName.toUpperCase().startsWith(x.name.toUpperCase()))
        })
      );
    }
    return this.result;
  }
  search($event): IcontactsGrouped[] {
    console.log(this.newdata);
    const s: Array<any> = $event.key;
    console.log(s[0].toUpperCase());
    const result = Array.from(s).map(
      x => ({
        letter: x.toUpperCase(),
        contacts: Array.from(this.newdata)
          .filter((item) => item.firstName.toUpperCase().startsWith(s[0].toUpperCase()))
      })
    );
    this.contactsGroupedToView = result;
    console.log(this.contactsGroupedToView);
    return this.contactsGroupedToView;
  }
}
