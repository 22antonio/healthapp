import { HealthCenter } from './../health-center';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'health-center-list',
  templateUrl: './health-center-list.component.html',
  styleUrls: ['./health-center-list.component.css'],
  inputs: ['healthCenters'],
  outputs: ['SelectHealthCenter']
})
export class HealthCenterListComponent implements OnInit {

  public SelectHealthCenter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(health: HealthCenter){
    this.SelectHealthCenter.emit(health);
  }

}
