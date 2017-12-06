import { Component, OnInit } from '@angular/core';
import { ListsComponent } from '../lists/lists.component'; 

//import { CreateNewList } from '../../directives/create-new-list.directive';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
