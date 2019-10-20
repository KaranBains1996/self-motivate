import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap/all';
import { Power2 } from 'gsap';

import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quote: Quote;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faShareAlt = faShareAlt;

  constructor(private qSvc: QuotesService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetchQuote(this);
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

  toggleShareMenu() {
    const btnCtn = document.querySelector('.sbuttons');
    btnCtn.classList.toggle('open');
  }

  copyQuote() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.quote.quoteText;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.snackBar.open('Copied', 'OK', {
      duration: 2000,
    });
  }
}
