import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-create-trivia-ppt',
  imports: [],
  providers: [
    BrowserModule,
  ],
  templateUrl: './create-trivia-ppt.component.html',
  styleUrl: './create-trivia-ppt.component.scss'
})
export class CreateTriviaPptComponent implements OnInit {

  constructor(protected http: HttpClient, ){}
  
  public ngOnInit(): void {
    this.http.get('../../assets/BasicAllQ1/docProps/core.xml', { responseType: 'text' })
      .pipe(
        switchMap(async xml => await console.log('FILE: ', xml))
      );
  }
}
