import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-no-selected-note',
  templateUrl: './no-selected-note.component.html',
  styleUrls: ['./no-selected-note.component.css']
})
export class NoSelectedNoteComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }

  ngOnInit() {
  }

}
