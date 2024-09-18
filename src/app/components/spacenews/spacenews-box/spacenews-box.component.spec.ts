import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacenewsBoxComponent } from './spacenews-box.component';

describe('SpacenewsBoxComponent', () => {
  let component: SpacenewsBoxComponent;
  let fixture: ComponentFixture<SpacenewsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacenewsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacenewsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
