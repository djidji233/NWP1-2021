import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {environment} from "../../environments/environment.prod";
import {LanguageDetectionRes, SentimentAnalysisRes} from "../model";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  // https://api.dandelion.eu/datatxt/sent/v1/?lang=en&text=I%20really%20love%20your%20APIs&token=<YOUR_TOKEN>

  private readonly apiUrl = environment.sentiment_analysis_endpoint;

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  calculate(text:string,lang:string){

    let mess = '[' + new Date().toLocaleDateString('en-DE', { year:"numeric", month:"numeric", day:"numeric", hour:"numeric",minute:"numeric", second:"numeric"}) + ']'  + ' GET '
      + this.apiUrl + '?lang='+lang+ '&text='+text+'&token='+this.configService.getToken()
    this.configService.addHistoryRecord(mess);

    return this.httpClient.get<SentimentAnalysisRes>(`${this.apiUrl}?lang=${lang}&text=${text}&token=${this.configService.getToken()}`);
  }

}
