import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const baseUrl = 'http://localhost:4000/'

@Injectable()
export class UrlService {
    constructor(public http: HttpClient) { }

    get(url: string): Observable<any> {
        return this.http.get(`${baseUrl}${url}`).pipe(map(data => data));
    }

    post(url, user) {
        return this.http.post(`${baseUrl}${url}`, user).pipe(
            map((response: Response) => {
                return response;
            })
        )
    }
}