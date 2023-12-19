import { TestBed } from '@angular/core/testing';

import { ManagerMenuService } from './manager-menu.service';

describe('ManagerMenuService', () => {
  let service: ManagerMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
