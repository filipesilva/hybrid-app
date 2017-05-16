import { HybridAppPage } from './app.po';

describe('hybrid-app App', () => {
  let page: HybridAppPage;

  beforeEach(() => {
    page = new HybridAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
