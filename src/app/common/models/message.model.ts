import { Injectable } from "@angular/core";

@Injectable()
export class Message {
    constructor(public type: string, public message: string) { }
}