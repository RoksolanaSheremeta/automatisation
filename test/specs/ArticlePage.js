const assert = require('assert');



describe('Gamblizard For "Article page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/gambling-statistics-uk/');
        await browser.setWindowSize(1552, 840);
    });

    it('Test 1: Check to Have Title', async () => {
        await browser.getTitle();
        await expect(browser).toHaveTitle('Gambling Industry Statistics in the United Kingdom 2009-2020 - GambLizard');
    });

    it('Test 2: Canonical',async () => {
        const canonical = await browser.$("link[rel='canonical']");
        const canonicalUrl = await canonical.getAttribute('href');
        assert.strictEqual(canonicalUrl, 'https://gamblizard.com/gambling-statistics-uk/');
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

    it('Test 10: Displayed post image',  async () => {
        const Postimage = await browser.$('div.post__thumb > img');
        await expect(Postimage).toBeDisplayed();
    });

    it('Test 11: Displayed post date',  async () => {
        const Postdate = await browser.$('div.post__data > div.post__date');
        await expect(Postdate).toBeDisplayed();
    });

    it('Test 12: Works post social',  async () => {
        const FacebookSocial = await browser.$('div.heateor_sss_sharing_ul > a.heateor_sss_facebook');
        await FacebookSocial.click();
        const TwitterSocial = await browser.$('div.heateor_sss_sharing_ul > a.heateor_sss_button_twitter');
        await TwitterSocial.click();
        const PinterestSocial = await browser.$('div.heateor_sss_sharing_ul > a.heateor_sss_button_pinterest');
        await PinterestSocial.click();
    });

    it('Test 13: Check Table of Content block', async () => {
        const TocBlock  = await browser.$('section.content-rule.content-rule--front > div > div > label');
        await TocBlock.click();
        const TocTitle = await browser.$('section.content-rule.content-rule--front > div > div > div > ol > li:nth-child(3) > a');
        await TocTitle.click();
    });

    it('Test 14: Check single author block',  async () => {
        const AuthorBlock = await $('div.post > div > div.post__content > div');
        await expect(AuthorBlock).toBeDisplayed();
    });
    
    it('Test 15: Displayed Subscribe block',  async () => {
        const Subscribe = await $('body > section.subscribe');
        await expect(Subscribe).toBeDisplayed();
    });

    // it('Test 16: Check Subscribe block', async  () => {
    //     const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
    //     await SubscribeDesc.addValue('automationtest@gmail.com');
    //     const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
    //     await checkbox.click();
    //     const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
    //     await submitBtn.click();
    // });
});