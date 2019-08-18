import { Injectable } from '@angular/core';

@Injectable()
export class PhotoModal {
    public isShow = false;

    show() {
        this.isShow = true;
    }

    hide() {
        this.isShow = false;
    }
}