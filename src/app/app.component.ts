import { Component, QueryList, ViewChildren } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public boxData: any = '';
  public message: string;
  handleAction(evt:any) {
  this.message = evt;
  }
}

