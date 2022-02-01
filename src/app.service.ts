import {Injectable} from "@nestjs/common";

// @ts-ignore
@Injectable
export class AppService {
    getUsers() {
        return [{id: 1, name: 'user'}]
    }
}