import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { TransferDataService } from '../../services/transfer-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  languagesForm = new FormGroup({
    languagesContent: new FormControl(''),
  });


  constructor(private buildComponent: BuildComponent, private transferDataService: TransferDataService) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.languages = true;
    this.transferDataService.setData(this.languagesForm.value);
  }

}
