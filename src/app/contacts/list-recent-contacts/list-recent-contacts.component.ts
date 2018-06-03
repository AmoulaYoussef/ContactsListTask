import { Component, OnInit } from '@angular/core';
import { RecentContactService } from '../../data/services/recent-contact-service';
import { Irecentcontact } from '../../data/interfaces/Irecentcontact';

@Component({
  selector: 'app-list-recent-contacts',
  templateUrl: './list-recent-contacts.component.html',
  styleUrls: ['./list-recent-contacts.component.css']
})
export class ListRecentContactsComponent implements OnInit {

  recentcontactsToView: Irecentcontact[];
  msgError: any;
  constructor(private recentContactService: RecentContactService) { }

  ngOnInit() {
    this.recentContactService.getAll()
    .subscribe(
      (recentcontacts) => {this.recentcontactsToView = recentcontacts.slice(0, 2) ; },
      (error) => {this.msgError = <any>error; }
     );

  }
}
