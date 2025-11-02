import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent{
roles: string[] = [
    "Senior Software Engineer",
    "Angular Developer",
    "Team Lead"
  ];

  displayText = "";
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 300;
  deletingSpeed = 60;
  animateImage = false;

constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

ngOnInit(): void {
  // Run typing only in browser
  if (isPlatformBrowser(this.platformId)) {
    this.typeText();
  }
   this.animateImage = false;
  setTimeout(() => {
    this.animateImage = true;
  }, 50);
}
  typeText() {
    const currentRole = this.roles[this.roleIndex];

    if (this.isDeleting) {
      this.displayText = currentRole.substring(0, this.charIndex--);
    } else {
      this.displayText = currentRole.substring(0, this.charIndex++);
    }

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      setTimeout(() => (this.isDeleting = true), 1000);
    } 
    else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
    }

    setTimeout(() => this.typeText(), this.isDeleting ? this.deletingSpeed : this.typingSpeed);
  }
}
