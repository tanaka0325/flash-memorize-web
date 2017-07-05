import { FlashMemorizeWebPage } from './app.po';

describe('flash-memorize-web App', () => {
  let page: FlashMemorizeWebPage;

  beforeEach(() => {
    page = new FlashMemorizeWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
