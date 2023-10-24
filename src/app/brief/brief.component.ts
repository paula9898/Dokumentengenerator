import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss'],
})
//zmieramy informację o tym gdzie jestesmy
export class BriefComponent {
  constructor(private route: ActivatedRoute) {
    console.log('data ', route.snapshot.data['name']);
  }
}
