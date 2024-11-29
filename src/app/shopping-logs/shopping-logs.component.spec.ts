import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingLogsComponent } from './shopping-logs.component';

describe('ShoppingLogsComponent', () => {
  let component: ShoppingLogsComponent;
  let fixture: ComponentFixture<ShoppingLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
