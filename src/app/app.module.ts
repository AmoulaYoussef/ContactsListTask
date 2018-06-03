import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule  } from '@angular/forms';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { RecentContactService } from './data/services/recent-contact-service';
import { ListRecentContactsComponent } from './contacts/list-recent-contacts/list-recent-contacts.component';
import { ItemRecentContactComponent } from './contacts/list-recent-contacts/item-recent-contact/item-recent-contact.component';
import { ContactService } from './data/services/contact-service';
import { GroupbyalphaPipe } from './groupbyalpha.pipe';
import { ContactsComponent } from './contacts/contacts.component';
import { ListContactsComponent } from './contacts/contacts/list-contacts.component';
import { ItemContactComponent } from './contacts/contacts/searchcontacts/contacts-list/item-contact/item-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AlphabeticComponent } from './contacts/alphabetic/alphabetic.component';
import { ContactsListComponent } from './contacts/contacts/searchcontacts/contacts-list/contacts-list.component';
import { SearchcontactsComponent } from './contacts/contacts/searchcontacts/searchcontacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    ItemContactComponent,
    AddContactComponent,
    AlphabeticComponent,
    ListRecentContactsComponent,
    ItemRecentContactComponent,
    ContactsListComponent,
    ContactsComponent,
    GroupbyalphaPipe,
    SearchcontactsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // NgPipe,
    Ng2PageScrollModule,
    RouterModule.forRoot([
      {path: '', component: ContactsComponent },
      {path: 'add', component: AddContactComponent },
      {path: 'viewContatcts', component: ContactsComponent },
    ])
  ],
  providers: [RecentContactService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
