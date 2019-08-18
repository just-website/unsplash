import { Injectable } from '@angular/core';

@Injectable()
export class PhotoModal {
    constructor() { }
    public isShow = false;

    public photo;
    show(photo) {
        this.isShow = true;
        this.photo = photo;
    }

    hide() {
        this.isShow = false;
        this.photo = null;
    }
}