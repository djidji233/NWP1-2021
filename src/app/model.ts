
// text similarity
export interface TextSimilarityRes {
  timestamp: string,
  time: number,
  lang: string,
  langConfidence: number,
  text1: string,
  url1: string,
  text2: string,
  url2: string,
  similarity: number
}
// language detection
export interface LanguageDetectionRes {
  timestamp: string,
  time: number,
  text: string,
  url: string,
  detectedLangs: DetectedLanguage[]
}
interface DetectedLanguage {
  lang: string,
  confidence: number
}

// sentiment analysis
export interface SentimentAnalysisRes {
  timestamp: string,
  time: number,
  lang: string,
  sentiment: Sentiment
}
interface Sentiment {
  score : number,
  type : string
}

// entity extraction
export interface EntityExtractionRes
{
  timestamp: string,
  "time": number,
  "lang": string,
  "langConfidence": number,
  "text": string,
  "url": string,
  "annotations": [
    {
      "id": number,
      "title": string,
      "uri": string,
      "label": string,
      "confidence": number,
      "spot": string,
      "start": number,
      "end": number,
      "types": [],
      "categories": [],
      "abstract": string,
      "lod": {
        "wikipedia": string,
        "dbpedia": string
      },
      "alternateLabels": [],
      "image": {
        "full": string,
        "thumbnail": string,
      }
    }
  ],
  "topEntities": [
      {
        "id": string,
        "uri": string,
        "score": number
      }
  ]
}
