import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private token: string;

  constructor() {
    this.token = '';
  }

  setToken(tkn: string): void{
    this.token = tkn;
  }

  getToken(): string {
    return this.token;
  }

}
