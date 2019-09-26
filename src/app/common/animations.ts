import { trigger, animateChild, query, animate, group, style, transition, state, stagger } from '@angular/animations';

export const RoutAnimation = (triggerName) => {
    return trigger(triggerName, [
        transition('* => *', [
            style({ width: '100%', position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                style({ opacity: '0' })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('600ms ease-out', style({ opacity: '0', width: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('600ms  300ms ease-out', style({ opacity: '1' })),
                ], { optional: true })
            ]),
            query(':enter', animateChild(), { optional: true }),
        ])

    ]);
}

export const ShowHideAnimation = (triggerName) => {
    return trigger(triggerName, [
        transition(':leave', [
            style({
                height: '*',
                opacity: '1',
                marginTop: '*',
                marginBottom: '*',
                paddingTop: '*',
                paddingBottom: '*',
            }),
            animate('150ms', style({
                height: '0',
                opacity: '0',
                marginTop: '0',
                marginBottom: '0',
                paddingTop: '0',
                paddingBottom: '0',
            }))
        ]),
        transition(':enter', [
            style({
                height: '0',
                opacity: '0',
                marginTop: '0',
                marginBottom: '0',
                paddingTop: '0',
                paddingBottom: '0',
            }),
            animate('150ms', style({
                height: '*',
                opacity: '1',
                marginTop: '*',
                marginBottom: '*',
                paddingTop: '*',
                paddingBottom: '*',
            }))
        ]),
    ])
}

export const CardShowAnimation = (triggerName) => {
    return trigger(triggerName, [
        transition('* => *', [
            query(':leave:not(.loader)', [
                stagger(75, [
                    animate('0.3s', style({ opacity: 0 }))
                ]),

            ], { optional: true }),
            query(':enter:not(.loader)', [
                style({
                    opacity: 0,
                    transformOrigin: '0% 50%',
                    transform: 'perspective(800px) scale(0.2) translate(-300%, 0%) translateZ(150px) rotateY(-180deg)'
                }),
                stagger(100, [
                    animate('.5s ease-out', style({
                        transformOrigin: '0% 50%',
                        transform: 'scale(1) translate(0%, 0%)  translateZ(0) rotateY(0)',
                        opacity: .5
                    })),
                    animate('.2s', style({ opacity: 1 })),
                ])
            ], { optional: true })
        ])
    ]);
}
// @keyframes rotateRight {
