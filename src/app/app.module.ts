import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/Material.Module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BriefComponent } from './brief/brief.component';
import { PressemitteilungComponent } from './pressemitteilung/pressemitteilung.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProtokollComponent } from './protokoll/protokoll.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BriefComponent,
    PressemitteilungComponent,
    ProtokollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MaterialModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
