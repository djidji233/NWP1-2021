import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public history;

  constructor(private configService : ConfigService) {
    this.history = configService.getHistory();
  }

  ngOnInit(): void {
  }

}
