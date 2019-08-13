import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
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
  constructor(
  ) { }

  private cardList;
  ngOnInit() {
  }

}
