import { Component, OnInit } from '@angular/core';
import { Note } from '../notes.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getNotes()
      .subscribe(data => this.notes = data);
  }

}
