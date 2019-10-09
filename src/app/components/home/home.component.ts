import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quote: Quote;

  constructor(private qSvc: QuotesService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getQuote();
  }

  getQuote() {
    this.spinner.show();
    this.qSvc.getQuote().subscribe(
      res => {
        this.quote = res;
        this.quote.quoteText = this.quote.quoteText.trim();
        this.spinner.hide();
      },
      err => {
        const errStr = err.error.text;
        const parsedStr = errStr.replace(/\\/g, '');
        console.log(errStr);
        console.log(parsedStr);
        this.quote = JSON.parse(parsedStr);
        this.spinner.hide();
        // this.getQuote();
      }
    );
  }

}
