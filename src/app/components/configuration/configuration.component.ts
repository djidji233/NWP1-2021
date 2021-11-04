import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  token: string;

  constructor(private configService: ConfigService) {
    this.token = this.configService.getToken();
  }

  ngOnInit(): void {
  }

  setToken(token:string) {
    this.configService.setToken(this.token);
    localStorage.setItem('token',this.token);
    console.log(this.token); // c9b6775fc7814d7f89394448467feb8a
  }

}
