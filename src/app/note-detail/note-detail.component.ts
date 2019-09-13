import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Note } from '../notes.model';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  note: Note;
  id: number;
  noteForm: FormGroup;
  editMode = false;

  constructor(private dataService: DataService, private route: ActivatedRoute, private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }

  triggerEditMode() {
    this.editMode = !this.editMode;
  }

  onDeleteNote() {
    console.log(this.id)
    this.dataService.deleteNote(this.id);
  }

  onSubmit() {
    console.log(this.noteForm.value)
    this.dataService.updateNote(this.id, this.noteForm.value);
    this.editMode = false;

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.note = this.dataService.getNote(this.id);
        this.initForm();
      }
    );
  }

  private initForm() {
    const note = this.dataService.getNote(this.id);
    let noteTitle = note.title;
    let noteBody = note.body;

    this.noteForm = new FormGroup({
      title: new FormControl(noteTitle),
      body: new FormControl(noteBody)
    });
  }

}
