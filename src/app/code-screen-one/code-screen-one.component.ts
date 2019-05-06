import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-screen-one',
  templateUrl: './code-screen-one.component.html',
  styleUrls: ['./code-screen-one.component.scss'],
})
export class CodeScreenOneComponent implements OnInit {
  private code_number_1: number = 1; 
  private code_number_2: number = 1; 
  private code_number_3: number = 1; 
  private code_number_4: number = 1; 
  private code_number_5: number = 1; 
  private code_number_6: number = 1; 

  private form: FormGroup; 

  private errorMessage: string; 

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      code_number_1: ['', Validators.compose([Validators.required, Validators.maxLength(1)])], 
      code_number_2: ['', Validators.compose([Validators.required, Validators.maxLength(1)])], 
      code_number_3: ['', Validators.compose([Validators.required, Validators.maxLength(1)])], 
      code_number_4: ['', Validators.compose([Validators.required, Validators.maxLength(1)])], 
      code_number_5: ['', Validators.compose([Validators.required, Validators.maxLength(1)])], 
      code_number_6: ['', Validators.compose([Validators.required, Validators.maxLength(1)])]
    })
  }

  verifyCode() {
    if (this.form.value["code_number_1"] === this.code_number_1 && 
        this.form.value["code_number_2"] === this.code_number_2 && 
        this.form.value["code_number_3"] === this.code_number_3 && 
        this.form.value["code_number_4"] === this.code_number_4 &&
        this.form.value["code_number_5"] === this.code_number_5 && 
        this.form.value["code_number_6"] === this.code_number_6) {
      this.router.navigate(['']); 
    }
    else {
       this.errorMessage = "Foute code probeer opnieuw!"
    }
  }

}
