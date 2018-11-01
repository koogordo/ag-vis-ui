import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  variable;
  constructor() {
  }

  ngOnInit() {}

  ngAfterViewInit() {
    // fix menu when passed
    $('.masthead').visibility({
      once: false,
      onBottomPassed: function() {
        console.log('scrolled passed bottom');
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
    });

    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
  }
}
