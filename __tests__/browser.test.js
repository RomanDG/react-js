import nightmare from 'nightmare';

describe("Visit to the homepage", () => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  it("Welcome", async () => {

    let page = nightmare().goto('http://localhost:3000');
    let text = await page.evaluate(() => (document.body.textContent)).end();
    expect(text).toContain('REACT.JS COURSE - BLOG');
  })

  it("Going to the Hmepage and going to a Contacts Page", async () => {
    let text = await nightmare().goto('http://localhost:3000')
              .click("a[href='/contacts']")
              .evaluate(() => (document.body.textContent)).end();
    expect(text).toContain('Contacts:');

  })
})