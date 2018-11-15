import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public Username = 'Your name';
  public Useremail = 'Your email';
  public complaint = 'Your Questions/Comments';

  constructor() { }

  ngOnInit() {
  }

  public submit_button() {
    alert(this.Username);
  }
}

