import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TextSimilarityRes} from "../model";
import {environment} from "../../environments/environment.prod";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  /*
  https://api.dandelion.eu/datatxt/sim/v1/?text1=Cameron%20wins%20the%20Oscar&text2=All%20nominees%20for%20the%20Academy%20Awards&token=<YOUR_TOKEN>

   */



  private readonly apiUrl = environment.text_similarity_endpoint;

  constructor(private httpClient: HttpClient, private configService: ConfigService) {}

  compare(text1: string, text2: string): Observable<TextSimilarityRes> {

    let mess = '[' + new Date().toLocaleDateString('en-DE', { year:"numeric", month:"numeric", day:"numeric", hour:"numeric",minute:"numeric", second:"numeric"}) + ']'  + ' GET '
      + this.apiUrl + '?text1='+text1+'&text2='+text2+'&token='+this.configService.getToken()
    this.configService.addHistoryRecord(mess);

    return this.httpClient.get<TextSimilarityRes>(`${this.apiUrl}?text1=${text1}&text2=${text2}&token=${this.configService.getToken()}`)
  }

}
