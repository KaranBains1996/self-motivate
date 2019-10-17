import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, i) => {
      let el = link as HTMLElement;
      if (el.style.animation) {
        el.style.animation = '';
      } else {
        el.style.animation = `navLinkFade 0.5s ease forwards ${(i / 5) + 0.75}s`;
      }
    });
  }

}
