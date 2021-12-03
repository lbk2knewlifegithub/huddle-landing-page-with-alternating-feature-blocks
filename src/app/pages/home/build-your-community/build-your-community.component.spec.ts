/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuildYourCommunityComponent } from './build-your-community.component';

describe('BuildYourCommunityComponent', () => {
  let component: BuildYourCommunityComponent;
  let fixture: ComponentFixture<BuildYourCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildYourCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildYourCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
