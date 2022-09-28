import { Injectable } from '@angular/core';
import {AccountService} from "./account.service";
import {IContact} from "./interfaces/IContact";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private contact: IContact | null = null;
  $contact = new Subject<IContact | null>();

  constructor() { }
}

deleteContact(id: string) {
  this.$contact = this.contactList.filter(
    contact => contact.id !== id
  );

}
