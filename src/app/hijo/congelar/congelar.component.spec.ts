import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongelarComponent } from './congelar.component';

describe('CongelarComponent', () => {
  let component: CongelarComponent;
  let fixture: ComponentFixture<CongelarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongelarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
