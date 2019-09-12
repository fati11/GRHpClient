import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {any} from 'codelyzer/util/function';
import {map, mergeMap, tap} from 'rxjs/operators';
import {User} from '../model/User';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
 public user: User;
    constructor(
        private httpClient: HttpClient
    ) {
    }

    authenticate(username, password) {
        return this.httpClient.post<any>('http://localhost:8489/authenticate', {username, password})
            .pipe(
            tap(
                userData => {
                    sessionStorage.setItem('username', username);
                    const tokenStr = 'Bearer ' + userData.token;
                    sessionStorage.setItem('token', tokenStr);
                    this.user = {
                        username: username,
                        token: tokenStr,
                        role: null,
                    };
                }
            ),
                mergeMap((user) => {
                    return this.httpClient.get('http://localhost:8489/rest/user/role');
                }),
                map((role: string) => {
                    this.user.role = role;
                    return this.user;
                })
        );
    }

    isUserLoggedIn() {
        const user = sessionStorage.getItem('username');
        // console.log(!(user === null))
        return !(user === null) ;
    }

    logOut() {
        // tslint:disable-next-line:label-position
        sessionStorage.clear() ;
    }
}
