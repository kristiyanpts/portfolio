import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.css'],
})
export class TopButtonComponent {
  isButtonShown: boolean = false;

  @HostListener('window:scroll', ['$event']) onWindowScroll(e: Event) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.isButtonShown = true;
    } else {
      this.isButtonShown = false;
    }
  }

  scrollToTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
