import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit {
  @ViewChild('typewriter', { static: true }) typewriterRef!: ElementRef;
  public typingText: string = '';

  ngAfterViewInit(): void {
    this.startTypingAnimation();
  }

  startTypingAnimation(): void {
    const text = "Hi, I'm Stef Wouters";
    let index = 0;

    const typeNextCharacter = () => {
      if (index < text.length) {
        this.typingText += text.charAt(index);
        index++;
        this.typewriterRef.nativeElement.innerText = this.typingText;
        setTimeout(typeNextCharacter, 100);
      }
    };

    typeNextCharacter();
  }

  navigateToProjectPage(projectName: string) {
    // Add your navigation logic here
  }

  getProjectImage(title: string): string {
    const firstWord = title.split(' ')[0]; // Get the first word from the project title
    return `assets/${firstWord}.png`; // Return the dynamic image path
  }
}
