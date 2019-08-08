import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  reviewForm: FormGroup
  errorMessages = {}

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      author: ['', {
        validators: [Validators.required],
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
      .subscribe(e => {
        if (e === 'INVALID') {
          this.errorMessages['author'] = "Author is required"
        }
      })

  }

}
