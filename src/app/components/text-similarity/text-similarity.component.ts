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
  result: string;
  isResultVisible: boolean;

  constructor(private textSimilarityService: TextSimilarityService) {
    this.text1 = '';
    this.text2 = '';
    this.result = '';
    this.isResultVisible = false;
  }

  ngOnInit(): void {
  }

  compare(text1: string, text2: string){
    this.textSimilarityService.compare(text1,text2).subscribe((res) => {
      this.result = Math.round(res.similarity*100) + '%';
      this.isResultVisible = true;
    });
  }

}
