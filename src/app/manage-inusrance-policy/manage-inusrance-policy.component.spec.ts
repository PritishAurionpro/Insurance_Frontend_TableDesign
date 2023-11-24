import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInusrancePolicyComponent } from './manage-inusrance-policy.component';

describe('ManageInusrancePolicyComponent', () => {
  let component: ManageInusrancePolicyComponent;
  let fixture: ComponentFixture<ManageInusrancePolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageInusrancePolicyComponent]
    });
    fixture = TestBed.createComponent(ManageInusrancePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
