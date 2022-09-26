import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;
  @Output() onDeleteContact = new EventEmitter<IContact>;
  @Output() onUpdateContact = new EventEmitter<IContact>;

  inUpdating: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.contact)
  }

  onUpdateClick() {
    this.onUpdateContact.emit(this.contact)
  this.inUpdating = true;
  }

  onDeleteClick() {
    this.onDeleteContact.emit(this.contact)
  }

}
