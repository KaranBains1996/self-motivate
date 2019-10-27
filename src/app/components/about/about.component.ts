import { Component, OnInit } from '@angular/core';
import { TimelineMax, Power2 } from 'gsap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.animateIn();
  }

  animateIn() {
    const q1 = document.querySelector('.q1');
    const q2 = document.querySelector('.q2');
    const q3 = document.querySelector('.q3');

    const t = new TimelineMax();
    t.fromTo(
      q1,
      0.75,
      { x: '-200%' },
      { x: '0%', ease: Power2.easeInOut },
      '+=1'
    ).fromTo(
      q2,
      0.75,
      { x: '200%' },
      { x: '0%', ease: Power2.easeInOut }
    ).fromTo(
      q3,
      0.75,
      { x: '-200%' },
      { x: '0%', ease: Power2.easeInOut }
    );
  }

}
