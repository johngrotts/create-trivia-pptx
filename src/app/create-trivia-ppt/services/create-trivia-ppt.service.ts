import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTriviaPptService {

  constructor(protected httpClient: HttpClient, ) { }

  public editCoreFile(): void {
    this.getCoreFile().subscribe(res => {
      let parser = new DOMParser();
      let xml = parser.parseFromString(res, 'application/xml');
      console.log('CORE: ', xml)
    });
  }
  
  public editAppFile(): void {
    this.getAppFile().subscribe(res => {
      let parser = new DOMParser();
      let xml = parser.parseFromString(res, 'application/xml');
      console.log('APP: ', xml)
    });
  }

  public editSingleSlide(fileName: string): void {
    this.getAppFile().subscribe(res => {
      let parser = new DOMParser();
      let xml = parser.parseFromString(res, 'application/xml');
      console.log('SINGLE FILE: ', xml)
    });
  }

  
  protected getSingleSlide(fileName: string): Observable<string> {
    return this.httpClient.get(`BasicAllQ1/${fileName}`, 
      { responseType: 'text' }).pipe(switchMap(async xml => {return xml}));
  }

  protected getAppFile(): Observable<string> {
    return this.httpClient.get('BasicAllQ1/docProps/app.xml', 
      { responseType: 'text' }).pipe(switchMap(async xml => {return xml}));
  }

  protected getCoreFile(): Observable<string> {
    return this.httpClient.get('BasicAllQ1/docProps/core.xml', 
      { responseType: 'text' }).pipe(switchMap(async xml => {return xml}));
  }
}
