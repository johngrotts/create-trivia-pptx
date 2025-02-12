import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTriviaPptComponent } from "./create-trivia-ppt/create-trivia-ppt.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateTriviaPptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'open-xml-editor';
}
