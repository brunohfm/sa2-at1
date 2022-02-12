import { TestBed } from '@angular/core/testing';

import { NomeServicoService } from './nome-servico.service';

describe('NomeServicoService', () => {
  let service: NomeServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomeServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
