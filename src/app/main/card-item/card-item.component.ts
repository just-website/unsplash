import { Component, OnInit, ViewEncapsulation, Input, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';
import { UrlService } from 'src/app/common/services/url.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardItemComponent implements OnInit {
  @Input() blur: boolean;
  @Input() lastItem: string;
  @Input() photo;
  constructor(
    private element: ElementRef
  ) { }

  @Output() onMouseEvent = new EventEmitter<boolean>();
  @Output() lastElemEvent = new EventEmitter<ElementRef>();

  @HostListener('mouseenter')
  onMouseEnter() {
    this.onMouseEvent.emit(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.onMouseEvent.emit(false);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.lastItem) {
      this.lastElemEvent.emit(this.element.nativeElement)
    }
  }

}
