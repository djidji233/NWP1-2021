
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
