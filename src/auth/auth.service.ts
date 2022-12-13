import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    signup() {
        return { "key": "Im signup" }
    }
    signin() {
        return { "key": "Im signin" }
    }

}
