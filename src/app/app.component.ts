import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public name: string;

  public set(name: string) {
    this.name = name;
    console.log(this.name);
  }
}
