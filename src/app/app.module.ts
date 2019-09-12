import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesComponent } from './notes/notes.component';
import { NoSelectedNoteComponent } from './no-selected-note/no-selected-note.component';
import { NoteItemComponent } from './notes/note-item/note-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteDetailComponent,
    NotesComponent,
    NoSelectedNoteComponent,
    NoteItemComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
