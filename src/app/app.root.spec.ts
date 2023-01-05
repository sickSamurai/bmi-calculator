import { TestBed } from '@angular/core/testing'

import { AppRoot } from './app.root'

describe('AppRoot', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppRoot],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppRoot);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
