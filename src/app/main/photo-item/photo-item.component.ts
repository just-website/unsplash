import { Component, OnInit, Input, HostBinding, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() blur: string;
  @Input() photo: any;
  @Input('color') inputColor: string;

  // @HostBinding('style.background-color') get getColor() {
  //   return this.photo.color;
  // }

  @Output() onMouseEvent = new EventEmitter<boolean>();
  @Output() showCurrentPhoto = new EventEmitter();

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
}
