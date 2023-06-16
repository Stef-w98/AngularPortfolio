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
    const texts = [
      "Hello, I'm Stef Wouters",
      "Hallo, ik ben Stef Wouters",
      "こんにちは、私はStef Woutersです",
      "¡Hola, soy Stef Wouters!",
      "Hallo, ich bin Stef Wouters",
      "你好，我是Stef Wouters",
      "Bonjour, je suis Stef Wouters"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100; // Delay between typing/deleting each character

    const typeNextCharacter = () => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        this.typingText = currentText.substring(0, charIndex);
        charIndex--;
      } else {
        this.typingText = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      this.typewriterRef.nativeElement.innerText = this.typingText;

      if (isDeleting && charIndex === -1) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 800; // Delay before typing the next text
      } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        delay = 800; // Delay before deleting the current text
      } else {
        delay = 100; // Delay between typing/deleting each character
      }

      setTimeout(typeNextCharacter, delay);
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
