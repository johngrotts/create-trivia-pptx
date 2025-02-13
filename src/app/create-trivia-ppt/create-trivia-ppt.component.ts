import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateTriviaPptService } from './services/create-trivia-ppt.service';

@Component({
  selector: 'app-create-trivia-ppt',
  imports: [],
  providers: [
    BrowserModule,

    CreateTriviaPptService,
  ],
  templateUrl: './create-trivia-ppt.component.html',
  styleUrl: './create-trivia-ppt.component.scss'
})
export class CreateTriviaPptComponent implements OnInit {

  constructor(protected httpClient: HttpClient,
              protected createService: CreateTriviaPptService, ) { }
  
  public ngOnInit(): void {
    this.createService.editCoreFile();
    this.createService.editAppFile();
    this.createService.editSingleSlide('slides/slide5.xml');
  }

}
