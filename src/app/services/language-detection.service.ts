import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {LanguageDetectionRes, TextSimilarityRes} from "../model";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  /*
  https://api.dandelion.eu/datatxt/li/v1/?text=I%20am%20a%20mighty%20pirate%20von%20Deutschland&token=<YOUR_TOKEN>
   */

  private readonly apiUrl = environment.language_detection_endpoint;

  constructor(private httpClient: HttpClient, private configService : ConfigService) {  }

  detect(text: string, clean : boolean){

    let mess = '[' + new Date().toLocaleDateString('en-DE', { year:"numeric", month:"numeric", day:"numeric", hour:"numeric",minute:"numeric", second:"numeric"}) + ']'  + ' GET '
                + this.apiUrl + '?text='+'&token='+this.configService.getToken()+'&clean='+clean;
    this.configService.addHistoryRecord(mess);

    return this.httpClient.get<LanguageDetectionRes>(`${this.apiUrl}?text=${text}&token=${this.configService.getToken()}`,
                                                      {params:{clean}});
  }

}
