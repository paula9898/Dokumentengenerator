import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

type DocumentType = 'brief' | 'pressemitteilung' | 'dokument' | 'protokoll';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private router: Router) {}

  onButtonClicked(documentType: DocumentType): void {
    this.router.navigate(['form', documentType]);
  }
}
