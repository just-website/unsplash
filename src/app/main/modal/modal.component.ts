import { Component, OnInit, ViewChild, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { PhotoModal } from 'src/app/common/services/photo-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {

  constructor(
    private modal: PhotoModal,
    private renderer: Renderer2,
  ) { }
  @ViewChild('modalPopup', { static: false }) modalPopup: ElementRef;

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.modalPopup.nativeElement, 'background-color', `${this.modal.photo.color}`)
  }

  closeModal() {
    this.modal.hide();
  }
}
