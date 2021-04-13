import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgstyleDirective } from './ng-style/ngstyle.directive';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgClassDirective } from './ng-class/ng-class.directive';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIfDirective } from './ng-if/ng-if.directive';
import { CardDirective } from './card/card.directive';
import { ContainerCardDirective } from './card/container-card.directive';
import { GridComponent } from './grid/grid.component';
import { GridDirective } from './grid/grid.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NgStyleComponent,
    NgstyleDirective,
    NgClassComponent,
    NgClassDirective,
    NgIfComponent,
    NgIfDirective,
    CardDirective,
    ContainerCardDirective,
    GridComponent,
    GridDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
