import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  @Output() submit1 = new EventEmitter();

  reviewForm: FormGroup
  errorMessages = {}

  isOpen = false;

  constructor(private fb: FormBuilder) { }

  toggleForm() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      author: ['', {
        validators: [Validators.required, Validators.email],
        // updateOn: 'blur'
      }],
      stars: [5],
      body: ['', Validators.required]
    })

    // this.reviewForm.get('author')
    //   .valueChanges
    //   .subscribe(e => {
    //     console.log(e)
    //   })

    this.reviewForm.get('author')
      .statusChanges
      .pipe(debounceTime(2000))
      .subscribe(e => {
        if (e === 'INVALID') {
          if (this.reviewForm.get('author').errors.required)
            this.errorMessages['author'] = "Author is required"
          if (this.reviewForm.get('author').errors.email)
            this.errorMessages['author'] = "Invalid Email"
        } else
          this.errorMessages['author'] = ""
      })

  }

  handleForm(e) {
    e.preventDefault();
    if (this.reviewForm.valid) {
      this.submit1.emit({ review: this.reviewForm.value })
      this.reviewForm.reset();
      this.toggleForm();
    }
  }

}
