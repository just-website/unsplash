import { Injectable } from "@angular/core";
import Unsplash from 'unsplash-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const unsplash = new Unsplash({
    applicationId: "dc698e73290315d4c63f3beedbeb919bca09450b105a8c2422b49a0d18d651dd",
    secret: "164490b919c7331c58fd0d665735627e1088fbd2e6deb7c7e4bd34bf1a711d9c"
});

const headers = {

}


const httpOptions = {
    headers: new HttpHeaders({
        Authorization: 'Client-ID dc698e73290315d4c63f3beedbeb919bca09450b105a8c2422b49a0d18d651dd'
    })
};

@Injectable()
export class UnsplashService {
    constructor(
        public http: HttpClient
    ) { }

    getGroups() {
        return this.http.get('https://api.unsplash.com/collections?per_page=12', httpOptions)
            .pipe(
                data => data
            );
    }

    getCollection(id) {
        return this.http.get(`https://api.unsplash.com/collections/${id}/photos?per_page=12`, httpOptions);
    }

}   