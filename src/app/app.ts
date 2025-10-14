import { CommonModule, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {
  protected readonly title = signal('portfolio_ousmane');
  mobileMenuOpen = false;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  scrollToAndClose(sectionId: string): void {
    this.scrollTo(sectionId);
    this.mobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0) {
        section.classList.add('show');
      }
    });
  }
}
