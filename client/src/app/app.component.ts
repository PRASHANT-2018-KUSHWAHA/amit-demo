import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amit-demo';

  list = [
    {
      name: 'Mark',
      age: '45',
      phone: 7497418484,
      email: 'test1@gmail.com'
    },
    {
      name: 'Jack',
      age: '50',
      phone: 9999995664,
      email: 'test2@gmail.com'
    }, {
      name: 'Mark',
      age: '45',
      phone: 56132021484,
      email: 'test3@gmail.com'
    }

  ]

  constructor() {
    localStorage.setItem('list', JSON.stringify(this.list));
  }
}
