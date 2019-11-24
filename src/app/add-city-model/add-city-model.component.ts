import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActionHandlerService } from '../services/action-handler.service';

@Component({
  selector: 'app-add-city-model',
  templateUrl: './add-city-model.component.html',
  styleUrls: ['./add-city-model.component.scss']
})
export class AddCityModelComponent implements OnInit {

  private modelState = false;
  @ViewChild('basicModal') myModel;
  
  constructor(private actionhandler: ActionHandlerService) {
    this.actionhandler.currentModelState.subscribe(res => {
      console.log(res);
      if(res) this.openModel();
    });
  }

  ngOnInit() {
  }

  openModel = () => {
    console.log('ACTION::OPEN_MODEL::COMPONENT');
    this.myModel.show();
  }

  closeModel = () => {
    console.log('ACTION::CLOSE_MODEL::COMPONENT');
  }
}
