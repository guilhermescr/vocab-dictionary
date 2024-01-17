import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent {
  @ViewChild('wordPronunciation') wordPronunciationAudioElement!: ElementRef;

  playPronunciationAudio() {
    const audio: HTMLAudioElement =
      this.wordPronunciationAudioElement.nativeElement;
    audio.play();
  }
}
