import { Injectable } from "@angular/core";
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
    applicationId: "dc698e73290315d4c63f3beedbeb919bca09450b105a8c2422b49a0d18d651dd",
    secret: "164490b919c7331c58fd0d665735627e1088fbd2e6deb7c7e4bd34bf1a711d9c"
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "read_user",
    "write_user",
    "read_photos",
    "write_photos"
]);

@Injectable()
export class UnsplashService {
    constructor() { }
    getRandomPhoto() {
        return unsplash.photos.getRandomPhoto()
            .then(data => data)
    }
}   