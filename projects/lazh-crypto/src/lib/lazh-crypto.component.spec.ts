import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazhCryptoComponent } from './lazh-crypto.component';

describe('LazhCryptoComponent', () => {
  let component: LazhCryptoComponent;
  let fixture: ComponentFixture<LazhCryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazhCryptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazhCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
