import { Component, OnInit } from '@angular/core';
import { Note } from '../notes.model';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  title: string;
  body: string;
  addNoteForm: FormGroup;

  constructor(private dataService: DataService, private translateService: TranslateService, private datastorage: DataStorageService) {
    translateService.setDefaultLang('en');
  }

  onSubmit() {
    console.log(this.addNoteForm.value)
    const newNote = new Note(this.addNoteForm.value['title'], this.addNoteForm.value['body'])
    this.addNoteForm.reset();
    this.dataService.addNote(newNote);
    this.datastorage.storeNotes();
  }
  ngOnInit() {
    this.notes = this.dataService.notes;
    this.initForm();
  }

  private initForm() {
    let title = '';
    let body = '';
    this.addNoteForm = new FormGroup({
      title: new FormControl(title),
      body: new FormControl(body)
    })
  }

}
