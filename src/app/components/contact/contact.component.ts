import { Component, OnInit } from '@angular/core';
import { TimelineMax, Power2 } from 'gsap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.animateIn();
  }

  animateIn() {
    const email = document.querySelector('.email');
    const github = document.querySelector('.github');
    const phone = document.querySelector('.phone');

    const t = new TimelineMax();
    t.fromTo(
      email,
      0.75,
      { x: '-200%' },
      { x: '0%', ease: Power2.easeInOut },
      '+=1'
    ).fromTo(
      github,
      0.75,
      { x: '200%' },
      { x: '0%', ease: Power2.easeInOut }
    ).fromTo(
      phone,
      0.75,
      { x: '-200%' },
      { x: '0%', ease: Power2.easeInOut }
    );
  }

}
