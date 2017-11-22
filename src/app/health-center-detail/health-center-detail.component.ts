import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'health-center-detail',
  templateUrl: './health-center-detail.component.html',
  styleUrls: ['./health-center-detail.component.css'],
  inputs: ['HealthCenter'],
  outputs: ['updateHealthCenterEvent', 'deleteHealthCenterEvent']
})
export class HealthCenterDetailComponent implements OnInit {
  healthCenter: any;

  private editService: boolean = false;
  private updateHealthCenterEvent = new EventEmitter();
  private deleteHealthCenterEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onServiceClick(){
    this.editService = true;
  }

  ngOnChanges() {
    this.editService = false;
  }

  updateHealthCenter(){
    this.updateHealthCenterEvent.emit(this.healthCenter)
  }

  deleteHealthCenter(){
    this.deleteHealthCenterEvent.emit(this.healthCenter);
  }

}
