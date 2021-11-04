import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private token: string | null;
  private history : string[];

  constructor() {
    this.token = localStorage.getItem('token');
    this.history = [];
  }

  setToken(tkn: string): void{
    this.token = tkn;
  }

  getToken(): string {
    return <string>this.token;
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
