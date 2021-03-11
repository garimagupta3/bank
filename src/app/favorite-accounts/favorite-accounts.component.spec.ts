import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAccountsComponent } from './favorite-accounts.component';

describe('FavoriteAccountsComponent', () => {
  let component: FavoriteAccountsComponent;
  let fixture: ComponentFixture<FavoriteAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
