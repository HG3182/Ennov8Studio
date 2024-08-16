import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  textArray: string[] = ['Design', 'Develop', 'Market'];
  currentText: string = '';
  currentIndex: number = 0;
  typingSpeed: number = 100; // Speed of typing effect
  erasingSpeed: number = 50; // Speed of erasing effect
  pauseDuration: number = 1000; // Pause duration between texts
  isTyping: boolean = true;

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    if (this.isTyping) {
      if (this.currentIndex < this.textArray.length) {
        let currentChar = this.textArray[this.currentIndex];
        this.currentText += currentChar[this.currentText.length];

        if (this.currentText.length === currentChar.length) {
          this.isTyping = false;
          setTimeout(() => this.typeText(), this.pauseDuration); // Pause before erasing
        } else {
          setTimeout(() => this.typeText(), this.typingSpeed);
        }
      } else {
        this.currentIndex = 0;
        this.currentText = '';
        this.isTyping = true;
        setTimeout(() => this.typeText(), this.pauseDuration); // Pause before starting again
      }
    } else {
      if (this.currentText.length > 0) {
        this.currentText = this.currentText.slice(0, -1);
        setTimeout(() => this.typeText(), this.erasingSpeed);
      } else {
        this.isTyping = true;
        this.currentIndex++;
        if (this.currentIndex >= this.textArray.length) {
          this.currentIndex = 0;
        }
        setTimeout(() => this.typeText(), this.pauseDuration);
      }
    }
  }
}
