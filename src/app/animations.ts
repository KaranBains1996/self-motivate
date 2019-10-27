import { trigger, transition, query, style, animateChild, group, animate } from '@angular/animations';

export const slideExpandAnimation =
  trigger('routeAnimations', [
    transition('HomePage => *', slideUp()),
    transition('AboutPage => HomePage', slideDown()),
    transition('AboutPage => ContactPage', slideUp()),
    transition('ContactPage => AboutPage', slideDown()),
    transition('ContactPage => HomePage', slideUp())
  ]);

function slideUp() {
  return [
    style({ position: 'relative' }),
    query(':leave, :enter', [
      style({
        position: 'absolute',
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    group([
      query(':leave', [
        style({
          top: '0%'
        }),
        animate('1s', style({
          top: '-100%',
        }))
      ], { optional: true }),
      query(':enter', [
        style({
          top: '100%',
        }),
        animate('1s', style({
          top: '0%'
        }))
      ], { optional: true }),
    ]),
  ];
}

function slideDown() {
  return [
    style({ position: 'relative' }),
    query(':leave, :enter', [
      style({
        position: 'absolute',
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    group([
      query(':leave', [
        style({
          top: '0%'
        }),
        animate('1s', style({
          top: '100%',
        }))
      ], { optional: true }),
      query(':enter', [
        style({
          top: '-100%',
        }),
        animate('1s', style({
          top: '0%'
        }))
      ], { optional: true }),
    ]),
  ];
}
