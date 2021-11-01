import { Component, OnInit } from '@angular/core';
import {TextSimilarityRes} from "../../model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {TextSimilarityService} from "../../services/text-similarity.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string;
  text2: string;
  result: number;

  constructor(private textSimilarityService: TextSimilarityService) {
    this.text1 = '';
    this.text2 = '';
    this.result = 0;
  }

  ngOnInit(): void {
  }

  compare(text1: string, text2: string){
    this.textSimilarityService.compare(text1,text2).subscribe((res) => {
      this.result = res.similarity;
      console.log(this.result)
    });
  }

}
