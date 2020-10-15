import { Component } from '@angular/core';

@Component({
  selector: '[app-root]',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  values = '';
  clickMessage =" ";
  onClickMe(){
    this.clickMessage = 'You are my hero'
  }
  onKey(event: any) { // without type info
    this.values += (event.target as HTMLInputElement).value + ' || ';
  }
 
}
