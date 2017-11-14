import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  videoGroup: FormGroup;
  constructor(private router: Router,
              private fb: FormBuilder) {
    this.videoGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      // year: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]]
    });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('/videos');
  }

  save() {
    console.log('Saving Video');
  }

}
