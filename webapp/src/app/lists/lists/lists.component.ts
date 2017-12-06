import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists:List[];

  constructor() {
    this.lists = [new List("Lista 1"), new List("Lista 2")];
  }

  ngOnInit() {
  }

}
