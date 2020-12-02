import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciFiLibraryComponent } from './sci-fi-library.component';

describe('SciFiLibraryComponent', () => {
  let component: SciFiLibraryComponent;
  let fixture: ComponentFixture<SciFiLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciFiLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SciFiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
