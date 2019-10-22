import { trigger, transition, query, style, animateChild, group, animate } from '@angular/animations';

export const slideExpandAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({position: 'relative' }),
      query(':leave, :enter', [
        style({
          position: 'absolute',
          width: '100%',
          height: '100%'
        })
      ], { optional: true }),
      query('.content', [
        style({
          opacity: 0
        }),
      ], { optional: true }),
      query(':enter', [
        style({
          zIndex: '1000',
          left: '-100%',
          height: '2vh',
          top: '50%',
        }),
        animate('0.5s', style({
          left: '0%',
        }))
      ], { optional: true }),
      query(':enter', [
        animate('0.5s', style({
          height: '100%',
          top: 0,
        }))
      ], { optional: true }),
      query('.content', [
        animate('1s', style({
          opacity: 1
        }))
      ], { optional: true }),
    ])
  ]);
