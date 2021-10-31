import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfigurationComponent} from "./components/configuration/configuration.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";

const routes: Routes = [
  {
    path: "",
    component: ConfigurationComponent
  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent
  },{
    path: "text-similarity",
    component: TextSimilarityComponent
  },{
    path: "language-detection",
    component: LanguageDetectionComponent
  },{
    path: "sentiment-analysis",
    component: SentimentAnalysisComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
