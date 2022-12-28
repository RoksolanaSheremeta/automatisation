const assert = require('assert');



describe('Gamblizard For "Contact page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/contact-us/');
        await browser.setWindowSize(1552, 840);
    });

    it('Test 1: Check to Have Title', async () => {
        await browser.getTitle();
        await expect(browser).toHaveTitle('Contact us - GambLizard');
    });

    it('Test 2: Canonical',async () => {
        const canonical = await browser.$("link[rel='canonical']");
        const canonicalUrl = await canonical.getAttribute('href');
        assert.strictEqual(canonicalUrl, 'https://gamblizard.com/contact-us/');
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
        const logoredirection = await $('body > header > div > div > a');
        await logoredirection.click();
        const logoredirectionUrlExp = await expect(browser);
        await logoredirectionUrlExp.toHaveUrl('https://gamblizard.com/');
    });

    it('Test 9: Breadcrubs works', async () => {
        const Breadcrubs = await $('#breadcrumbs > span > span > a');
        await Breadcrubs.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/');
    });

    it('Test 10: Displayed Contact us block',  async () => {
        const Contactusblock = await browser.$('div.contact > div > div');
        await expect(Contactusblock).toBeDisplayed();
    });

    it('Test 11: Check Subscribe block', async  () => {
        const SubscribeName = await $('#name');
        await SubscribeName.addValue('Autotest name');
        const SubscribeEmail = await $('#email');
        await SubscribeEmail.addValue('automationtest@gmail.com');
        const SubscribeMessage = await $('#message');
        await SubscribeMessage.addValue('Autotest message');
        const submitBtn = await $('div > div > div.contact__right > form > button');
        await submitBtn.click();
        await browser.pause(3000);
        const CloseBtn = await $('div.contact__right > form > div.contact__form-done.contact__form-done-js > button');
        await CloseBtn.click();
    });

    it('Test 12: Displayed Verified Casino Bonuses block',  async () => {
        const Verifiedblock = await browser.$('div.popular-codes__slider.popular-codes__slider-js.owl-carousel.owl-loaded.owl-drag > div.owl-stage-outer');
        await expect(Verifiedblock).toBeDisplayed();
    });

    it('Test 13: Displayed Subscribe block',  async () => {
        const Subscribe = await $('body > section.subscribe');
        await expect(Subscribe).toBeDisplayed();
    });

    // it('Test 14: Check Subscribe block', async  () => {
    //     const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
    //     await SubscribeDesc.addValue('automationtest@gmail.com');
    //     const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
    //     await checkbox.click();
    //     const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
    //     await submitBtn.click();
    // });
});