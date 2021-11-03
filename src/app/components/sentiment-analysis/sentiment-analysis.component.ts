import { Component, OnInit } from '@angular/core';
import {SentimentAnalysisService} from "../../services/sentiment-analysis.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text : string;
  lang : string;
  score : number;
  type : string;
  isResVisible : boolean;
  color: string;

  constructor(private sentimentAnalysisService : SentimentAnalysisService) {
    this.text = '';
    this.score = 0;
    this.type = '';
    this.lang = '';
    this.isResVisible = false;
    this.color = '';
  }

  ngOnInit(): void {
  }

  calculate (text : string, lang : string) {
    this.type = '';
    this.score = 0;
    this.isResVisible = false;

    this.sentimentAnalysisService.calculate(text, lang).subscribe((res) => {
        this.score = res.sentiment.score;
        this.type = res.sentiment.type;
        this.color = 'red';
        this.isResVisible = true;

        console.log(this.score,this.type);
    })
  }

}
