import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParabensPage } from './parabens.page';

describe('ParabensPage', () => {
  let component: ParabensPage;
  let fixture: ComponentFixture<ParabensPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParabensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
