import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //title = 'Lab1';
  n = number;
  cheapWisdom = "LOL!";
  hateList:Array<string> = ["Something", "Something Hate more", "Something hatre even more"];
}
let NothateList: Array<string> = ["Doggo1", "Doggo2", "Doggo3"]
const number = 13