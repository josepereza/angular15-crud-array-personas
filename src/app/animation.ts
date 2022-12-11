import { animate, state, style, transition, trigger } from "@angular/animations";

export function FadeIn(timingIn: number, height: boolean = false): any  {
    return trigger('fadeIn', [
        state('void', style({
          opacity: 0
        })),
        transition('void <=> *', animate(1000)),
      ])
    };