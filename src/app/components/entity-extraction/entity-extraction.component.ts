import { Component, OnInit } from '@angular/core';
import {EntityExtractionService} from "../../services/entity-extraction.service";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string;
  min_confidence: number;
  include :boolean;
  includeParams: string;


  constructor(private entityExtractionService: EntityExtractionService) {
    this.text = '';
    this.min_confidence = 0;
    this.include = false;
    this.includeParams = '';
  }

  ngOnInit(): void {
  }

  search(text: string, min_confidence: number, includeParams: string) {
    if(this.include){
      let res = includeParams.split(',')
      let imageStr = res[0].length>1 ? res[0] : '';
      let abstractStr = res[1].length>1 ? res[1] : '';
      let categoriesStr = res[2].length>1 ? res[2] : '';
      this.entityExtractionService.search(text,min_confidence,imageStr,abstractStr,categoriesStr).subscribe((res)=>{
        console.log(res)
      })
    } else {
      this.entityExtractionService.search(text,min_confidence,'','','').subscribe((res)=>{
          console.log(res)
      })
    }


    this.min_confidence = 0;
  }

}
