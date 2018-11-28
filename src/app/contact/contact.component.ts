import { Component, OnInit } from '@angular/core';

declare function emailer(a, b, c, d): any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public Username = '';
  public Useremail = '';
  public Subject = '';
  public complaint = '';


  constructor() { }

  ngOnInit() {
  }

  public submit_button() {
    emailer(this.Useremail, this.Subject, this.Username, this.complaint);
    alert('Email Sent');
  }
}

