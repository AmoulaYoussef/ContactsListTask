import { Component, OnInit, Input } from '@angular/core';
import { Irecentcontact } from '../../../data/interfaces/Irecentcontact';

@Component({
  selector: 'app-item-recent-contact',
  templateUrl: './item-recent-contact.component.html',
  styleUrls: ['./item-recent-contact.component.css']
})
export class ItemRecentContactComponent implements OnInit {
  @Input() recentContact: Irecentcontact;

  constructor() { }

  ngOnInit() {
  }

}
