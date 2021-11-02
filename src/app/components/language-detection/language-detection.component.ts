import { Component, OnInit } from '@angular/core';
import {LanguageDetectionService} from "../../services/language-detection.service";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text : string;
  clean : boolean;
  result : string[];
  isResultVisible : boolean;

  constructor(private languageDetectionService : LanguageDetectionService) {
    this.text = '';
    this.clean = false;
    this.result = [];
    this.isResultVisible = false;
  }

  ngOnInit(): void {
  }

  detect(text : string, clean : boolean): string[]{
    this.isResultVisible = false;
    this.result = [];
    this.languageDetectionService.detect(text,clean).subscribe((res)=>{
      for(let i = 0; i<res.detectedLangs.length; i++){
        this.result.push(res.detectedLangs[i].lang);
      }
      this.isResultVisible = true;
      console.log(res.detectedLangs)
      return this.result;
    })
    return [];
  }

}
