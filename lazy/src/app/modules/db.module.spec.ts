import { DbModule } from './db.module';

describe('DbModule', () => {
  let dbModule: DbModule;

  beforeEach(() => {
    dbModule = new DbModule();
  });

  it('should create an instance', () => {
    expect(dbModule).toBeTruthy();
  });
});
