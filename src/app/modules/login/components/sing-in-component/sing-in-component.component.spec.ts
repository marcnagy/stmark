import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInComponentComponent } from './sing-in-component.component';

describe('SingInComponentComponent', () => {
  let component: SingInComponentComponent;
  let fixture: ComponentFixture<SingInComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingInComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
