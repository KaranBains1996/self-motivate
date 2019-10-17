import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap/all';
import { Power2 } from 'gsap';

import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quote: Quote;

  constructor(private qSvc: QuotesService) { }

  ngOnInit() {
    this.animateOut({callback: this.fetchQuote});
  }

  fetchQuote(ctx) {
    ctx.qSvc.getQuote().subscribe(
      (res: Quote) => {
        ctx.quote = res;
        if (ctx.quote.quoteAuthor === '') {
          ctx.quote.quoteAuthor = 'Anonymous';
        }
        ctx.quote.quoteText = ctx.quote.quoteText.trim();
        ctx.animateIn();
      },
      (err: any) => {
        const errStr = err.error.text;
        const parsedStr = errStr.replace(/\\/g, '');
        ctx.quote = JSON.parse(parsedStr);
        if (ctx.quote.quoteAuthor === '') {
          ctx.quote.quoteAuthor = 'Anonymous';
        }
        ctx.animateIn();
      }
    );
  }

  animateIn() {
    console.log('in');
    const qCtn = document.querySelector('#quote-ctn');
    const t1 = new TimelineMax();
    t1.fromTo(
      qCtn,
      1,
      { x: '-100%' },
      { x: '10%', ease: Power2.easeInOut }
    )
    .to(
      qCtn,
      0.25,
      { x: '0%', ease: Power2.easeInOut }
    );
  }

  animateOut(args: any) {
    const ctx = this;
    const qCtn = document.querySelector('#quote-ctn');
    const t1 = new TimelineMax();
    t1.fromTo(
      qCtn,
      1,
      { x: '0%' },
      { x: '100%', ease: Power2.easeInOut }
    ).call(() => {
      if (args.hasOwnProperty('callback')) {
        args.callback(ctx);
      }
    });
  }
}
