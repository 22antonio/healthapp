import { HealthCenterService } from './../health-center.service';
import { HealthCenter } from './../health-center';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-center-hub',
  templateUrl: './health-center-hub.component.html',
  styleUrls: ['./health-center-hub.component.css'],
  providers: [HealthCenterService]
})
export class HealthCenterHubComponent implements OnInit {

  healthCenters: Array<HealthCenter>;

  selectedHealthCenter: HealthCenter;
  private hidenewHealthCenter: boolean = true;

  constructor(private _healthCenterService: HealthCenterService) { }

  ngOnInit() {
    this._healthCenterService.getHealthCenters()
      .subscribe(resHealthCenterdata => this.healthCenters = resHealthCenterdata);
  }

onSelectHealthCenter(HealthCenter:any){
  this.selectedHealthCenter = HealthCenter;
  this.hidenewHealthCenter = true;
  console.log(this.selectedHealthCenter);
}

newHealthCenter() {
   this.hidenewHealthCenter = false;
 }

onSubmitAddHealthCenter(healthCenter: HealthCenter) {
    this._healthCenterService.addHealthCenter(healthCenter)
      .subscribe(resNewHealthCenter => {
        this.healthCenters.push(resNewHealthCenter);
        this.hidenewHealthCenter = true;
        this.selectedHealthCenter = resNewHealthCenter;
      });

  }

onUpdateHealthCenterEvent(healthCenter: any){
  this._healthCenterService.updateHealthCenter(healthCenter)
    .subscribe(resUpdatedHealthCenter => healthCenter = resUpdatedHealthCenter);
  this.selectedHealthCenter = null;
};

onDeleteHealthCenterEvent(healthCenter: any) {
  let healthCenterArray = this.healthCenters;
  this._healthCenterService.deleteHealthCenter(healthCenter)
    .subscribe(resDeletedHealthCenter => {
      for (let i = 0; i < healthCenterArray.length; i++) {
        if (healthCenterArray[i]._id === healthCenter._id) {
          healthCenterArray.splice(i, 1);
        }
      }
    });
  this.selectedHealthCenter = null;
};

}
