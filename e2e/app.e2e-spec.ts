import { IftttmakerPage } from './app.po';

describe('iftttmaker App', function() {
  let page: IftttmakerPage;

  beforeEach(() => {
    page = new IftttmakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
