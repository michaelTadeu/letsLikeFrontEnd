import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { LoginDTO, User } from '@app/_models';

// Serviços que fazem a ponte com o back-end

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({ providedIn: 'root' })
export class AccountService {

    url = 'https://localhost:44371/api/Login';

    loginSucesso: boolean = false;
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username: string, senha: string) {
       console.log(this.url);
       console.log(username, senha);
    //    return this.http.post<boolean>(this.url, usuario, httpOptions);

       return this.http.post<boolean>(this.url, { username, senha })
       .subscribe(resultado => console.log(resultado));

    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/api/usuario`, user);
    }
}