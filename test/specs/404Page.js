const assert = require('assert');

describe('Gamblizard For "404 page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/no-deposxfb/')
        await browser.setWindowSize(1552, 840)
    });

    it('Test 1: Check to Have Title', async () => {
        await browser.getTitle();
        await expect(browser).toHaveTitle('Page not found - GambLizard')
    });

    it('Test 2: Canonical',async () => {
        const canonical = await browser.$("link[rel='canonical']");
        const canonicalUrl = await canonical.getAttribute('href');
        assert.strictEqual(canonicalUrl, 'https://gamblizard.com/no-deposxfb/')
    });

    it('Test 3: Check Canonical should be only one', async () => {
        const canonAmount = await $$("link[rel='canonical']")
    });
    
    it('Test 4: Check URL logo', async () => {
        const logoUrl = await $("/html/body/header/div/div/a/img")
        let logoUrlGetAtr = await logoUrl.getAttribute('href')
    });
    
    it('Test 5: Check alt for URL logo', () => {
        browser.url('https://gamblizard.com/')
        const altLogo = $('document.querySelector("body > div > div > div > div.bfad93f > header > div > span > img")')
        expect(altLogo).toHaveAttr('alt')
    });

    it('Test 6: Logo redirection', async () => {
        const logoredirection = await $('body > header > div > div > a')
        await logoredirection.click()
        const logoredirectionUrlExp = await expect(browser)
        await logoredirectionUrlExp.toHaveUrl('https://gamblizard.com/')
    });

    it('Test 7: Works casino bonuses button',  async () => {
        const CasinoBonusesBtn = await browser.$('div.container_404_page_bg > div > p > a')
        await CasinoBonusesBtn.click()
    })
});