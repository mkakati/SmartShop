import { TestBed } from '@angular/core/testing';

import { BehavioursubjectService } from './behavioursubject.service';

describe('BehavioursubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehavioursubjectService = TestBed.get(BehavioursubjectService);
    expect(service).toBeTruthy();
  });
});
