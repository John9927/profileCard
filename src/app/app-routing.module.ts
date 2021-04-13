import { GridComponent } from './grid/grid.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { CardComponent } from './card/card.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgIfComponent } from './ng-if/ng-if.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'card', component: CardComponent },
  { path: 'ngIf', component: NgIfComponent },
  { path: 'ngStyle', component: NgStyleComponent },
  { path: 'ngClass', component: NgClassComponent },
  { path: 'grid', component: GridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
