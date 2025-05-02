import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiadasPage } from './piadas.page';

describe('PiadasPage', () => {
  let component: PiadasPage;
  let fixture: ComponentFixture<PiadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
