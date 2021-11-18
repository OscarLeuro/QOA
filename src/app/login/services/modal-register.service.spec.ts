import { TestBed } from '@angular/core/testing';

import { ModalRegisterService } from './modal-register.service';

describe('ModalRegisterService', () => {
  let service: ModalRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
