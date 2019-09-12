import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteDetailComponent } from './note-detail/note-detail.component'

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
