import { Component, OnInit, Input } from '@angular/core';
import { Icontact } from '../../../../../data/interfaces/Icontact';

@Component({
  selector: 'app-item-contact',
  templateUrl: './item-contact.component.html',
  styleUrls: ['./item-contact.component.css']
})
export class ItemContactComponent implements OnInit {

 @Input() contact: Icontact;
  constructor() { }

  ngOnInit() {
  }

}
