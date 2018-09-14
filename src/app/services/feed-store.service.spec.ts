import { TestBed, inject } from '@angular/core/testing';

import { FeedStoreService } from './feed-store.service';

describe('FeedStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedStoreService]
    });
  });

  it('should be created', inject([FeedStoreService], (service: FeedStoreService) => {
    expect(service).toBeTruthy();
  }));
});
