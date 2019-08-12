import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[toggleActive]'
})
export class ToggleActiveDirective {
    constructor(private elementRef: ElementRef) {

    }
    @HostListener('click', ['$event'])
    onClick(event) {
        const parent = event.target.closest('.header__login');
        parent.classList.toggle('active');
    }

}   