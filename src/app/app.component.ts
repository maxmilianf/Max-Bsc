import { Component, OnInit } from '@angular/core';
import { Note } from './notes.model';
import { DataService } from './data.service';
import { DataStorageService } from './data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private dataStorage: DataStorageService) {

  }

  onSaveData() {
    this.dataStorage.storeNotes();
  }

  onFetchData() {
    this.dataStorage.fetchNotes();
  }

  ngOnInit() {

  }
}
