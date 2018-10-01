import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-addblood',
  templateUrl: './addblood.component.html',
  styleUrls: ['./addblood.component.css']
})


export class AddBloodComponent {
    savedBloodGroups = [];
    bloodGroupList = [];
    bloodGroupForm: any;
    constructor(private localStorageService: LocalStorageService) {
      this.totalBloodCounts();
    }

    totalBloodCounts() {
      this.bloodGroupList = [
        {name: 'A+'},
        {name: 'B+'},
        {name: 'O+'},
        {name: 'AB+'},
        {name: 'A-'},
        {name: 'B-'},
        {name: 'O-'},
        {name: 'AB-'}
      ];
      this.savedBloodGroups = JSON.parse(this.localStorageService.get('bloodDataList'));

      this.bloodGroupForm = new FormGroup({
          name: new FormControl('', Validators.required),
          count: new FormControl('', Validators.required)
      });
    }

    addBloodCount() {
      const name = this.bloodGroupForm.value.name;
      const count = this.bloodGroupForm.value.count;

      const bloodData = {
        name,
        count
      };
      if (this.localStorageService.get('bloodDataList') === null) {
        const bloodDataList = [];
        bloodDataList.push(bloodData);

        this.localStorageService.set('bloodDataList', JSON.stringify(bloodDataList));
      } else {
        const bloodDataList = JSON.parse(this.localStorageService.get('bloodDataList'));

        const index = bloodDataList.findIndex((e) => e.name === bloodData.name);
        if (index === -1) {
          bloodDataList.push(bloodData);
        } else {

          const newkey = bloodDataList[index].name;
          const newval = bloodDataList[index].count;
          const filteredData = {
            name: newkey,
            count: parseFloat(newval) + parseFloat(count)
          };

          bloodDataList[index] = filteredData;
        }

        this.localStorageService.set('bloodDataList', JSON.stringify(bloodDataList));
      }
      this.savedBloodGroups = JSON.parse(this.localStorageService.get('bloodDataList'));

      // console.log(this.bloodGroupForm.value);
    }
}
