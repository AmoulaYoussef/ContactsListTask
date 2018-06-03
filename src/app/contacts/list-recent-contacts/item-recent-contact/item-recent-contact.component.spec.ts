import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRecentContactComponent } from './item-recent-contact.component';

describe('ItemRecentContactComponent', () => {
  let component: ItemRecentContactComponent;
  let fixture: ComponentFixture<ItemRecentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRecentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRecentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
