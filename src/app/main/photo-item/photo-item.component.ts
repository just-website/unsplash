import { Component, OnInit, Input, HostBinding, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent implements OnInit {

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(
  ) {
  }

  @Input() blur: string;
  @Input() photo: any;
  @Input() lastItem: any;
  @Input('color') inputColor: string;

  // @HostBinding('style.background-color') get getColor() {
  //   return this.photo.color;
  // }

  @Output() onMouseEvent = new EventEmitter<boolean>();
  @Output() showCurrentPhoto = new EventEmitter();
  @Output() lastElemEvent = new EventEmitter<ElementRef>();

  @HostListener('mouseenter')
  onMouseEnter() {
    this.onMouseEvent.emit(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.onMouseEvent.emit(false);
  }

  showPhoto() {
    this.showCurrentPhoto.emit(this.photo);
  }

  ngAfterViewInit(): void {
    if (this.lastItem) {
      this.lastElemEvent.emit(this.element.nativeElement)
    }
  }
}
