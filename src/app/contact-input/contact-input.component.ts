import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent implements OnInit {

  @Output() onSave = new EventEmitter<IContact>();
  @Output() onCancel = new EventEmitter<undefined>();
  @Output() onUpdatedContact = new EventEmitter<string>();

  contact: IContact = {
    id: (Math.random()),
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    birthday: new Date(),
    meetingDate: new Date(),
    relation: "",
    company: "",
    notes: "",

  };

  constructor() { }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.onCancel.emit();
  }


  onSubmit(input: IContact) {
    this.onSave.emit(input);
    console.log(input)
  }

  // onUpdate(input: string): void {
  //   this.onUpdatedContact.emit(input);
  // }
}
