import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {environment} from "../../environments/environment.prod";
import {EntityExtractionRes, LanguageDetectionRes} from "../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  /*
  https://api.dandelion.eu/datatxt/nex/v1/?lang=en
  &text=The%20doctor%20says%20an%20apple%20is%20better%20than%20an%20orange
  &include=types%2Cabstract%2Ccategories%2Clod&token=<YOUR_TOKEN>
   */

  private readonly apiUrl = environment.entity_extraction_endpoint;

  constructor(private httpClient:HttpClient, private configService:ConfigService) {}

  search(text: string, min_confidence: number, imageStr:string, abstractStr:string, categoriesStr: string) : Observable<EntityExtractionRes>{



    return this.httpClient.get<EntityExtractionRes>(`${this.apiUrl}&text=${text}&token=${this.configService.getToken()}`,
                                          {
                                                    params:{
                                                      ['min_confidence']:min_confidence,
                                                      ['image']:imageStr,
                                                      ['abstract']:abstractStr,
                                                      ['categories']:categoriesStr
                                                    }
                                                  })
  }

}
