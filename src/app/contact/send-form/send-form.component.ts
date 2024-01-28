import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { IValidationMessage } from 'src/app/form-validation/form-validation.component';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.css']
})
export class SendFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
      console.log(form.value);
      form.reset();
  }
 
  validateControl(element:NgModel)
  {
     return !element.touched ? '' : element.valid ? 'is-valid' : 'is-invalid'
  }

  validationMessage(element:NgModel, feedbackText:string[], elementId:string):IValidationMessage
  {
    if (feedbackText.length < 2)
    {
      console.log('Not enough data', feedbackText)
      for(let i = feedbackText.length; i < 2; i++)
      {
        feedbackText.push("");
      }
    }
    return {
            'isValid':element.valid || false,
            'isTouched':element.touched || false,
            'validFeedbackText':feedbackText[0],
            'invalidFeedbackText':feedbackText[1],
            'elementId':elementId
           }
  }
}
