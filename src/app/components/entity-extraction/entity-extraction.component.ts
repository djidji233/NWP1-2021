import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string;
  min_confidence: number;

  constructor() {
    this.text = '';
    this.min_confidence = 0;
  }

  ngOnInit(): void {
  }

  search() {

  }

}
