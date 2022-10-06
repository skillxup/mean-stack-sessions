import { TestBed } from '@angular/core/testing';

import { CrudOperationsUserService } from './crud-operations-user.service';

describe('CrudOperationsUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudOperationsUserService = TestBed.get(CrudOperationsUserService);
    expect(service).toBeTruthy();
  });
});
