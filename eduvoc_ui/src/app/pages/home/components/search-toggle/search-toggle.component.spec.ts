import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchToggleComponent } from './search-toggle.component';

describe('SearchToggleComponent', () => {
  let component: SearchToggleComponent;
  let fixture: ComponentFixture<SearchToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
