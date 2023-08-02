import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  code: string = `// Daily cycle

      (function repeat() {
          eat();
          sleep();
          code();
          repeat();
      })();

      function eat() {
        console.log("Fridge is empty...")
      }

      function sleep() {
          console.log("What even is that? Is it edible?")
      }

      function code() {
          console.log("Now we are talking!")
      }`;
}
