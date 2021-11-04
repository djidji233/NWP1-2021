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
  imageStr : string;
  imageBool : boolean;
  abstractStr : string;
  abstractBool : boolean;
  categoriesStr:string;
  categoriesBool:boolean;

  constructor(private entityExtractionService: EntityExtractionService) {
    this.text = '';
    this.min_confidence = 0;
    this.imageStr = '';
    this.abstractStr = '';
    this.categoriesStr = '';
    this.imageBool = false;
    this.abstractBool = false;
    this.categoriesBool = false;
  }

  ngOnInit(): void {
  }

  search(text: string, min_confidence: number, imageStr: string, abstractStr: string, categoriesStr: string) {
    this.imageStr = this.imageBool ? 'image' : '';
    this.abstractStr = this.abstractBool ? 'abstract' : '';
    this.categoriesStr = this.categoriesBool ? 'categories' : '';

    this.entityExtractionService.search(this.text,this.min_confidence,this.imageStr,this.abstractStr,this.categoriesStr);//.subscribe((res)=>

    //);
    this.min_confidence = 0;
  }

}
