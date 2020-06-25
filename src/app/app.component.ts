import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contactForm: FormGroup;
  formValue: any;
  showValue: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],  
      email: [''],
      message: ['']
    });
  }

  onSubmit() {
    this.formValue = this.contactForm.value;
    this.showValue = true;
  }
}