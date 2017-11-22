import { HealthappPage } from './app.po';

describe('healthapp App', function() {
  let page: HealthappPage;

  beforeEach(() => {
    page = new HealthappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
