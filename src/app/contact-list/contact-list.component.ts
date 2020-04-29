import { contacts } from "./../contact";
import { userContact } from "./../userContact";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"],
})
export class ContactListComponent implements OnInit {
  contacts: userContact[];
  newContact: any = {};
  constructor() {}

  ngOnInit() {
    // initialize your contacts here
    this.contacts = contacts;
  }

  addContact(newContact): any {
    console.log("Add contact has been called");
    console.log(newContact);
    this.contacts.push(newContact);
    // add contact to contacts list
    // clear inputs
  }
}
