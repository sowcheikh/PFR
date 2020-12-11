import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        nom:['', Validators.required],
        prenom:['', Validators.required]
      }
    )
  }

  get f() {
    return this.registerForm.controls;

  }

  onSubmit() {
    //console.log(this.registerForm.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
        
    }
    console.log(this.registerForm.value);
    this.registerForm.reset();
    this.submitted = false;
  }
  

}
