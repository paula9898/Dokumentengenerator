import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pressemitteilung',
  templateUrl: './pressemitteilung.component.html',
  styleUrls: ['./pressemitteilung.component.scss'],
})
export class PressemitteilungComponent {
  constructor(private route: ActivatedRoute) {
    console.log('data ', route.snapshot.data['name']);
  }
}
