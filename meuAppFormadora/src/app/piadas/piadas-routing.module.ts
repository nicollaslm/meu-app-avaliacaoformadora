import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiadasPage } from './piadas.page';

const routes: Routes = [
  {
    path: '',
    component: PiadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PiadasPageRoutingModule {}

