import { Component, OnInit, ViewEncapsulation, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { UrlService } from 'src/app/common/services/url.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardItemComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() preview: any;
  @Input() id: any;
  @Input() blur: boolean;
  constructor(
  ) { }

  @Output() onMouseEvent = new EventEmitter<boolean>();

  @HostListener('mouseenter')
  onMouseEnter() {
    this.onMouseEvent.emit(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.onMouseEvent.emit(false);
  }

  private cardList;
  ngOnInit() {
  }

}
