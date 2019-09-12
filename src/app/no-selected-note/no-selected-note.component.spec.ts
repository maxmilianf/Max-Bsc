import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSelectedNoteComponent } from './no-selected-note.component';

describe('NoSelectedNoteComponent', () => {
  let component: NoSelectedNoteComponent;
  let fixture: ComponentFixture<NoSelectedNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSelectedNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSelectedNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
