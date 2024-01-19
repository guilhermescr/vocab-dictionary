import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) {}

  getWord(word: string) {
    return this.http.get<any>(this.apiUrl + word);
  }
}
