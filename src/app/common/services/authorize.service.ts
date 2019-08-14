import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizeService {
    public authoraze: boolean = !!window.localStorage.getItem('authorize');

    login(user: User) {
        window.localStorage.setItem(user.email, JSON.stringify(user));
        this.authoraze = true;
        this.setAuthorize(user);
    }

    logout() {
        this.authoraze = false;
        window.localStorage.removeItem('authorize')
    }

    isAuthorize(): boolean {
        return this.authoraze;
    }

    getUserName() {
        const data = window.localStorage.getItem('authorize')
        if (data) {
            return JSON.parse(data).name || JSON.parse(data).email;
        } else throw new Error('Нет сохранённого пользователя');
    }

    setAuthorize(user) {
        this.authoraze = true;
        window.localStorage.setItem('authorize', JSON.stringify(user));
    }
}