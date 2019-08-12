import { Injectable } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Injectable()
export class CustomValidator {
    constructor(
        private userService: UserService
    ) { }

    confirmValidator(inputName: string, errorName: string) {
        return (control: FormControl): Validators => {
            let originValue: string;
            if (control.parent) {
                originValue = control.parent.get(inputName).value;
            }
            if (originValue !== control.value) {
                console.log(errorName);

                return { [errorName]: true }
            } else return null;
        }
    }

    uniqValueValidator(keyName: string) {
        return (control: FormControl): Promise<any> => {
            return new Promise((resolve) => {
                const data = window.localStorage.getItem(control.value);
                if (data) {
                    resolve({ [keyName]: true })
                } else {
                    resolve(null);
                }
            })
        }
    }
}