import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";
import {DataService} from "../data.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;
  @Output() onUpdateContact = new EventEmitter<IContact>;

  inUpdating: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.contact)
  }

  onUpdateClick() {
    this.onUpdateContact.emit(this.contact)
  this.inUpdating = true;
  }

  onDeleteClick() {
    this.dataService.deleteContact(this.contact.id)
  }

}
