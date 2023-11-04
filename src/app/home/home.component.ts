import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

type DocumentType = 'brief' | 'pressemitteilung' | 'dokument' | 'protokoll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  onButtonClicked(documentType: DocumentType): void {
    this.router.navigate(['form', documentType]);
  }
}
