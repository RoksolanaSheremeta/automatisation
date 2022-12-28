const assert = require('assert');



describe('Gamblizard For "Casinos page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/casinos/');
        await browser.setWindowSize(1552, 840);
    });

    it('Test 1: Check to Have Title', async () => {
        await browser.getTitle();
        await expect(browser).toHaveTitle('Online Casino Index: UK Gambling Commission Licensed Casinos');
    });

    it('Test 2: Canonical',async () => {
        const canonical = await browser.$("link[rel='canonical']");
        const canonicalUrl = await canonical.getAttribute('href');
        assert.strictEqual(canonicalUrl, 'https://gamblizard.com/casinos/');
    });

    it('Test 3: Check Canonical should be only one', async () => {
        const canonAmount = await $$("link[rel='canonical']");
    });

    it('Test 4: Check of Description', async () => {
        const description = await $("meta[name='description']");
        const descLength = await description.getAttribute('content');
    });
    
    it('Test 5: Check URL logo', async () => {
        const logoUrl = await $("/html/body/header/div/div/a/img");
        let logoUrlGetAtr = await logoUrl.getAttribute('href');
    });
    
    it('Test 6: Check alt for URL logo', () => {
        browser.url('https://gamblizard.com/');
        const altLogo = $('document.querySelector("body > div > div > div > div.bfad93f > header > div > span > img")');
        expect(altLogo).toHaveAttr('alt')
    });

    it('Test 7: Check H1 on page', () => {
        const h1 = $('input')
        expect(h1).toHaveAttribute('h1 class')
    });

    it('Test 8: Logo redirection', async () => {
        const logoredirection = await browser.$('body > header > div > div > a');
        await logoredirection.click();
        const logoredirectionUrlExp = await expect(browser);
        await logoredirectionUrlExp.toHaveUrl('https://gamblizard.com/');
    });

    it('Test 9: Breadcrubs works', async () => {
        const Breadcrubs = await browser.$('#breadcrumbs > span > span > a');
        await Breadcrubs.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/');
    });

    it('Test 10: Displayed casinos filter',  async () => {
        const casinosfilter = await browser.$('div.casinos-tmp.casinos-tmp--js > div > div.casinos-tmp__filter');
        await expect(casinosfilter).toBeDisplayed();
    });

    it('Test 11: Check casinos filter',  async () => {
        const Filtercasinos = await browser.$('div > div.casinos-tmp__filter > span:nth-child(2)');
        await Filtercasinos.click();
        const Filtercasinos2 = await browser.$('div > div.casinos-tmp__filter > span:nth-child(6)');
        await Filtercasinos2.click();
        const Filtercasinos3 = await browser.$('div > div.casinos-tmp__filter > span:nth-child(13)');
        await Filtercasinos3.click();
        const Filtercasinos4 = await browser.$('div > div.casinos-tmp__filter > span:nth-child(23)');
        await Filtercasinos4.click();
    });

    it('Test 12: Check regirect logo for casinos filter',  async () => {
        const Filtercasinos = await browser.$('div > div.casinos-tmp__filter > span:nth-child(2)');
        await Filtercasinos.click();
        const FiltercasinosLogo = await browser.$('div.casinos-tmp__content > div:nth-child(2) > div:nth-child(2) > div > a > img');
        await FiltercasinosLogo.click();
        const FiltercasinosLogoUrl = await expect(browser);
        await FiltercasinosLogoUrl.toHaveUrl('https://gamblizard.com/casinos/21-bets-casino-bonus/');
    });

    it('Test 13: Check regirect logo2 for casinos filter',  async () => {
        const Filtercasinos2 = await browser.$('div > div.casinos-tmp__filter > span:nth-child(36)');
        await Filtercasinos2.click();
        const FiltercasinosLogo2 = await browser.$('div.casinos-tmp__content > div:nth-child(32) > div:nth-child(4) > div > a > img');
        await FiltercasinosLogo2.click();
        const FiltercasinosLogoUrl2 = await expect(browser);
        await FiltercasinosLogoUrl2.toHaveUrl('https://gamblizard.com/casinos/zodiac-casino-bonus/');
    });
    
    it('Test 14: Displayed Subscribe block',  async () => {
        const Subscribe = await browser.$('body > section.subscribe');
        await expect(Subscribe).toBeDisplayed();
    });

    it('Test 15: Check Subscribe block', async  () => {
        const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
        await SubscribeDesc.addValue('automationtest@gmail.com');
        const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
        await checkbox.click();
        const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
        await submitBtn.click();
    });
});