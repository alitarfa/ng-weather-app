import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-forcast',
  templateUrl: './table-forcast.component.html',
  styleUrls: ['./table-forcast.component.scss']
})
export class TableForcastComponent implements OnInit {

  private Thead = [''];
  private listFiveDays = ['','',''];
  private listIcon = [
    '../../assets/001-drop.png',
    '../../assets/004-clouds.png',
    '../../assets/010-wind-1.png',
    '../../assets/006-sun.png'
  ]

  constructor() { }

  ngOnInit() {
  }

}
