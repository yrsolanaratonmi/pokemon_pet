import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  public isLoggedIn = false;

  public err = false;

  public register(login: string, password: string) {
    return this.http
      .post('http://localhost:8080/auth/registration', {
        login: login,
        password: password,
      })
      .subscribe(
        () => {
          this.authorize(login, password);
        },
        (err: any) => console.log(err)
      );
  }

  public authorize(login: string, password: string) {
    return this.http
      .post('http://localhost:8080/auth/authorization', {
        login: login,
        password: password,
      })
      .subscribe(
        () => {
          this.isLoggedIn = true;
          this.router.navigate(['home']);
        },
        () => (this.err = true)
      );
  }

  public logout() {
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
