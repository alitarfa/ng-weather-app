import { TestBed } from '@angular/core/testing';

import { ModelHandlerService } from './model-handler.service';

describe('ModelHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelHandlerService = TestBed.get(ModelHandlerService);
    expect(service).toBeTruthy();
  });
});
