import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, } from 'rxjs/operators';
import { UrlService } from './url.service';

const url = 'http://localhost:4000/users'

@Injectable()
export class UserService extends UrlService {
    private user: User;
    constructor(
        public http: HttpClient,
    ) {
        super(http);
    }

    getUserByEmail(email): Observable<User> {
        const user: User = JSON.parse(window.localStorage.getItem(email));

        return of(user).pipe(
            map(user => {
                if (user) {
                    return user
                } else {
                    throw new Error('Пользователь с таким email не найден')
                }
            })
        );
    }

    addUser(user: User): Observable<any> {
        window.localStorage.setItem(user.email, JSON.stringify(user));
        return from(Promise.resolve(user));
    }

}
