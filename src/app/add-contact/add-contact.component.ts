import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../data/services/contact-service';
import { contact } from '../data/classes/contact';
import { Icontact } from '../data/interfaces/Icontact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  // for reset inputs
  @ViewChild('MyForm') slForm: NgForm;

  contacts: Icontact[];
  imagurl = '../../assets/account_circle.png';
  fileupload: File = null;
  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactService.getAll()
      .subscribe(
        ((data) => this.contacts = data)
      );
  }

  uplodaphoto(file: FileList) {
    this.fileupload = file.item(0);
    // show
    const reader = new FileReader();
    reader.onload = (event: any) => { this.imagurl = event.target.result ; };
    reader.readAsDataURL(this.fileupload);
  }
  OnAdd(form: NgForm) {
    const value = form.value;
    const firstnum = value.firstnum as string;
    const num = value.num as string;
    const newIcontact = new contact('', value.email, '', firstnum + num, value.firstName, value.lastName, value.cImage);
    this.contacts.push(newIcontact);
    this.contactService.Add(this.contacts);
    this.onClear();

  }
  onClear() {
    this.slForm.reset();
  }
}
