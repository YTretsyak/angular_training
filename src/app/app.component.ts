import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'shop';
  @ViewChild('title') inputField: ElementRef;

  ngAfterViewInit(): void {
    (<HTMLInputElement>this.inputField.nativeElement).value = "Hello From Angular"
  }
}


