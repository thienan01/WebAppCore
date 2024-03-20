export class SignInResponse{
    id: string
    username:string
    access_token:string

    constructor(id:string, username:string,access_token:string) {
        this.id = id;
        this.username = username;
        this.access_token = access_token;
    }
    
}