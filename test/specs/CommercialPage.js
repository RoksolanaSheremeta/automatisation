const assert = require('assert');



describe('Gamblizard For "Commercial page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/best-uk-online-casinos/');
        await browser.setWindowSize(1552, 840);
    });

    it('Test 1: Check to Have Title', async () => {
        await browser.getTitle();
        await expect(browser).toHaveTitle('Best UK Online Casino Sites with Quality Games and Bonuses in 2022');
    });

    it('Test 2: Canonical',async () => {
        const canonical = await browser.$("link[rel='canonical']");
        const canonicalUrl = await canonical.getAttribute('href');
        assert.strictEqual(canonicalUrl, 'https://gamblizard.com/best-uk-online-casinos/');
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

    it('Test 10: Displayed Categories sidebar',  async () => {
        const Categoriesdebar = await browser.$('div.filter-sidebar__list');
        await expect(Categoriesdebar).toBeDisplayed();
    });

    it('Test 11: Works links in the Categories sidebar',  async () => {
        const GamblingSites = await $('div:nth-child(1) > div.filter-sidebar__content.accordion-content-js > ul > li:nth-child(2)');
        await GamblingSites.click();
        const ByMobileOS = await $('div:nth-child(2) > div.filter-sidebar__content.accordion-content-js > ul > li:nth-child(1)');
        await ByMobileOS.click();
        const ByDevices = await $('div:nth-child(3) > div.filter-sidebar__content.accordion-content-js > ul > li:nth-child(2)');
        await ByDevices.click();
        const ByPaymentOption = await $('div:nth-child(4) > div.filter-sidebar__content.accordion-content-js > ul > li:nth-child(7)');
        await ByPaymentOption.click();
    });

    it('Test 12: Works regirect logo on the commercial page',  async () => {
        const CommercialLogo = await browser.$('div:nth-child(1) > div.coupon-com__logo > a');
        await CommercialLogo.click();
    });
    
    it('Test 13: Redirect coupon title on the commercial page',  async () => {
        const RedirectCoponTitle = await browser.$('div:nth-child(1) > div.coupon-com__info > a');
        await RedirectCoponTitle.click();
    });

    it('Test 14: Redirect Visit Casino button',  async () => {
        const VisitCasinoBtn = await browser.$('div.commercial-pages__coupons.commercial-coupons-js > div:nth-child(2) > a');
        await VisitCasinoBtn.click();
    });

    it('Test 15: Works Content more buttons on coupons',  async () => {
        const ContentMoreexpand = await browser.$('div:nth-child(1) > div.coupon-com__tands > div > div > p > button > svg');
        await ContentMoreexpand.click();
        const ContentMorecollapse = await browser.$('div:nth-child(1) > div.coupon-com__tands > div > div > p > button > svg');
        await ContentMorecollapse.click();
    });

    it('Test 16: Check Show More button',  async () => {
        const ShowMore = await $('div.commercial-pages__coupons.commercial-coupons-js > button');
        await expect(ShowMore).toBeDisplayed();
    });

    it('Test 17: Displayed Subscribe block after Show More button',  async () => {
        const Subscribe = await browser.$('body > div.container > section');
        await expect(Subscribe).toBeDisplayed();
    });

    // it('Test 18: Check Subscribe block', async  () => {
    //     const SubscribeEmail = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
    //     await SubscribeEmail.addValue('automationtest@gmail.com');
    //     const checkbox = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
    //     await checkbox.click();
    //     const GetmoreoffersBtn = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__item > button');
    //     await GetmoreoffersBtn.click();
    // });

    it('Test 19: Check Table of Content block', async () => {
        const TocBlock  = await browser.$('section.content-rule.content-rule--front > div > div > label');
        await TocBlock.click();
        const TocTitle = await browser.$('section.content-rule.content-rule--front > div > div > div > ol > li:nth-child(3) > a');
        await TocTitle.click();
    });

    it('Test 20: Check Top UK Online Casinos List',  async () => {
        const ListOfOnlineCasinos = await $('section.content-rule.content-rule--front > div > section:nth-child(4)');
        await expect(ListOfOnlineCasinos).toBeDisplayed();
    });

    it('Test 21: Check FAQ block',  async () => {
        const faqquestion = await browser.$('section.faq > div > div > div:nth-child(3)');
        await faqquestion.click();
        const faqquestion2 = await browser.$('section.faq > div > div > div:nth-child(5)');
        await faqquestion2.click();
    });

    it('Test 22: Check single author block',  async () => {
        const AuthorBlock = await $('body > div:nth-child(8) > div');
        await expect(AuthorBlock).toBeDisplayed();
    });
    
    it('Test 23: Displayed Subscribe block',  async () => {
        const Subscribe = await $('body > section.subscribe');
        await expect(Subscribe).toBeDisplayed();
    });

    // it('Test 24: Check Subscribe block', async  () => {
    //     const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
    //     await SubscribeDesc.addValue('automationtest@gmail.com');
    //     const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
    //     await checkbox.click();
    //     const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
    //     await submitBtn.click();
    // });
});