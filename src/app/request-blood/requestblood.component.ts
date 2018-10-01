import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-bloodrequest',
  templateUrl: './requestblood.component.html',
  styleUrls: ['./requestblood.component.css']
})
export class RequestBloodComponent {
    savedBloodGroups = [];
    bloodGroupList = [];
    bloodGroupForm: any;
    constructor(private localStorageService: LocalStorageService) {
      this.savedBloodCounts();
    }

    savedBloodCounts() {
      this.savedBloodGroups = JSON.parse(this.localStorageService.get('bloodDataList'));

      this.bloodGroupForm = new FormGroup({
          name: new FormControl('', Validators.required),
          count: new FormControl('', Validators.required)
      });
    }
}
