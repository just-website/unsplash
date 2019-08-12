export class User {
    constructor(
        public password: string,
        public email: string,
        public name?: string,
        public id?: string,
    ) { }
}