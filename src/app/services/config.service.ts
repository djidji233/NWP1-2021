import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private token: string;
  private history : string[];

  constructor() {
    this.token = '';
    this.history = [];
  }

  setToken(tkn: string): void{
    this.token = tkn;
  }

  getToken(): string {
    return this.token;
  }

  addHistoryRecord(mess:string){
    this.history.push(mess);
  }

  getHistory() : string[] {
    return this.history;
  }

  resetHistory():void{
    this.history = [];
  }

}
