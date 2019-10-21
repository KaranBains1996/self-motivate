import { trigger, transition, query, style, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          height: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({
          opacity: 0,
        }),
      ], { optional: true }),
      group([
        query('.transition-top', [
          animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        query('.transition-bottom', [
          animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
      ]),
      query(':leave', [
        style({
          opacity: 0,
        }),
      ], { optional: true }),
      query(':enter', [
        style({
          opacity: 1,
        }),
      ], { optional: true }),
      group([
        query('.transition-top', [
          animate('0.5s ease-in-out', style({ transform: 'translateY(-102%)' }))
        ]),
        query('.transition-bottom', [
          animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
        ]),
      ]),
    ])
  ]);
