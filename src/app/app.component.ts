import { Component } from '@angular/core';
import { CardShowAnimation } from './common/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    CardShowAnimation('listAnimation')
  ]
})
export class AppComponent {
  title = 'my-radio-app';
}
