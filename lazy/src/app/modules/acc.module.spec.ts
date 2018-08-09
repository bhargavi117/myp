import { AccModule } from './acc.module';

describe('AccModule', () => {
  let accModule: AccModule;

  beforeEach(() => {
    accModule = new AccModule();
  });

  it('should create an instance', () => {
    expect(accModule).toBeTruthy();
  });
});
