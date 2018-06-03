import { Component, OnInit} from '@angular/core';
import { ContactService } from '../../data/services/contact-service';


@Component({
  selector: 'app-alphabetic',
  templateUrl: './alphabetic.component.html',
  styleUrls: ['./alphabetic.component.css']
})
export class AlphabeticComponent implements OnInit {
  alphabetics;
  constructor(private contactService: ContactService) { }
  ngOnInit() {
    this.alphabetics = this.contactService.alphabetics;
   console.log(this.alphabetics);
  }
}
