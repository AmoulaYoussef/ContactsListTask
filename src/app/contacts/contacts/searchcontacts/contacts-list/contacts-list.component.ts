import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../data/services/contact-service';
import { IcontactsGrouped } from '../../../../data/interfaces/IcontactsGrouped';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  @Input() contactsGroupedToView: Array<IcontactsGrouped>;
  constructor(private contactservice: ContactService) { }
  ngOnInit() {

  }
}
