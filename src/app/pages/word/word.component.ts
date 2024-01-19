import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Meaning } from 'src/app/shared/models/meaning.model';
import { Word } from 'src/app/shared/models/word.model';
import { WordService } from 'src/app/shared/services/word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent {
  @ViewChild('wordPronunciation') wordPronunciationAudioElement!: ElementRef;
  wordData$!: Observable<Word>;

  constructor(
    private wordService: WordService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const word = this.route.snapshot.paramMap.get('id') || '';

    this.wordService.getWord(word).subscribe({
      next: (dataList) => {
        // The API response may have 1 or more objects, but the first one is always preferable.
        const data = dataList[0];
        const meanings: Meaning[] = data.meanings.map((meaning: any) => {
          const definitions = meaning.definitions
            .slice(0, 3)
            .map((definition: any) => {
              return {
                definition: definition.definition,
                example: definition.example,
              };
            });

          return {
            grammaticalClass: meaning.partOfSpeech,
            definitions,
          };
        });

        const wordData = {
          word: data.word,
          pronunciationFile: data.phonetics[0].audio,
          pronunciationIpa: data.phonetics[0].text,
          meanings,
        };

        this.wordData$ = of(wordData);
      },
      error: (error) => {
        console.error(error);
        // send to 404 Error page
      },
    });
  }

  playPronunciationAudio() {
    const audio: HTMLAudioElement =
      this.wordPronunciationAudioElement.nativeElement;
    audio.play();
  }
}
