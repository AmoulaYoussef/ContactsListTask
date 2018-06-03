import { Component, OnInit, OnChanges } from '@angular/core';
import { Irecentcontact } from '../../data/interfaces/Irecentcontact';
import { RecentContactService } from '../../data/services/recent-contact-service';
import { ContactService } from '../../data/services/contact-service';
import { Icontact } from '../../data/interfaces/Icontact';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  msgError: any;
  contacts: Icontact[];

  constructor(private contactService: ContactService) { }
   ngOnInit() {
    this.contactService.getAll()
      .subscribe(
          (data) => { this.contacts = data ; },
          (error) => { this.msgError = <any>error; }
      );
    }


}
