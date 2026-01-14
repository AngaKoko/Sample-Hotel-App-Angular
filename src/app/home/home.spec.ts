import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompoent } from './home';

describe('Home', () => {
  let component: HomeCompoent;
  let fixture: ComponentFixture<HomeCompoent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCompoent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCompoent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
