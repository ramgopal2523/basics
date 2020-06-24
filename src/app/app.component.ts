import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Project CC';

  products = [{
    name: 'Phone XL',
    value: 2,
    isDone: 3
  },
  {
    name: 'Phone Mini',
    value: 2,
    isDone: 3
  },
  {
    name: 'Phone Standard',
    value: 2,
    isDone: 3
  }
  ];

  ngOnInit() {
  }
}