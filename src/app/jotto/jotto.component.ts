import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jotto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jotto.component.html',
  styleUrl: './jotto.component.scss'
})

export class JottoComponent {
  secretWord!: string;
  currentGuess: string;
  matches: number;
  wordList!: string[];
  wordListAlt!: string[];
  guessList: {word: string, matches: number}[] = [];
  isWordGuessed: boolean = false;

  constructor(private http: HttpClient) {
    this.matches = 0;
    this.currentGuess = '';
    this.loadWordLists();
  }

  loadWordLists() {
    this.http.get('assets/jottoWordList.json').subscribe((data: any) => {
      this.wordList = data;
    });
    this.http.get('assets/jottoWordListAlt.json').subscribe((data: any) => {
      this.wordListAlt = data;
      this.secretWord = this.wordListAlt[Math.floor(Math.random() * this.wordListAlt.length)];
    });
  }

  guessWord() {
    this.matches = 0;
    let secretWordArray = this.secretWord.split('');
    let currentGuessArray = this.currentGuess.split('');
    for (const letter of secretWordArray) {
      if (currentGuessArray.includes(letter)) {
        this.matches++;
      }
    }
    this.guessList.push({word: this.currentGuess, matches: this.matches});
    if (this.currentGuess === this.secretWord) { // Add this line
      this.isWordGuessed = true; // Add this line
    }
  }
}