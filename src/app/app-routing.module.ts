import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesComponent } from './notes/notes.component';
import { NoSelectedNoteComponent } from './no-selected-note/no-selected-note.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  {
    path: 'notes', component: NotesComponent, children: [
      { path: '', component: NoSelectedNoteComponent },
      { path: ':id', component: NoteDetailComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
