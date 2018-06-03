import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ContactService } from '../data/services/contact-service';
import { Icontact } from '../data/interfaces/Icontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
