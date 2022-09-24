import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() list!: IContact[];
  @Output() newContact = new EventEmitter<undefined>();
  @Output() onDeleteContact = new EventEmitter<IContact>();
  @Output() onUpdateContact = new EventEmitter<IContact>();


  constructor() {
  }

  ngOnInit(): void {
    console.log(this.list)
  }

  onClick () {
    console.log('hello')
    this.newContact.emit();
  }
  onContactDelete(contact: IContact){
    this.onDeleteContact.emit(contact)
}

  onContactUpdate(contact: IContact) {
    this.onUpdateContact.emit(contact)
  }

}
