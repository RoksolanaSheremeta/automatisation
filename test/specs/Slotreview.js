const assert = require('assert');



describe('Gamblizard For "Slots review page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/slots/aloha-cluster-pays-free-spins/');
        await browser.setWindowSize(1552, 840);
    });

    it('Test 1: Check to Have Title', async () => {
        await browser.getTitle();
        await expect(browser).toHaveTitle('Best Aloha Cluster Pays Free Spins & 1st Deposit Bonuses in July 2022');
    });

    it('Test 2: Canonical',async () => {
        const canonical = await browser.$("link[rel='canonical']");
        const canonicalUrl = await canonical.getAttribute('href');
        assert.strictEqual(canonicalUrl, 'https://gamblizard.com/slots/aloha-cluster-pays-free-spins/');
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

    it('Test 10: Check Slot provider',  async () => {
        const Slotprovider = await $('div.container > div.single-slot__header > p');
        await expect(Slotprovider).toBeDisplayed();
    });

    it('Test 11: Check Get Free Spins button for slot',  async () => {
        const GetFreeSpins = await $('div.single-slot__content-bottom.div4-grid > button');
        await GetFreeSpins.click();
    });

    it('Test 12: Displayed Slot logo block',  async () => {
        const Slotlogo = await $('div.single-slot__content-img.div1-grid.show-iframe-wrap-js');
        await expect(Slotlogo).toBeDisplayed();
        const altLogo = $('document.querySelector("div.single-slot__content-img.div1-grid.show-iframe-wrap-js > img")');
        expect(altLogo).toHaveAttr('alt')
    });

    it('Test 13: Check List Of Online Casinos',  async () => {
        const ListOfOnlineCasinos = await $('#list > div > div');
        await expect(ListOfOnlineCasinos).toBeDisplayed();
    });

    it('Test 14: Check logo for List Of Online Casinos block',  async () => {
        const LogofOnlineCasinos = await $('div:nth-child(1) > div.casino-coupon__logo');
        await expect(LogofOnlineCasinos).toBeDisplayed();
        const altLogo = $('document.querySelector("div:nth-child(1) > div.casino-coupon__logo > a > img)');
        expect(altLogo).toHaveAttr('alt')
    });

    it('Test 15: Check coupon label for List Of Online Casinos block',  async () => {
        const couponlabel = await $('div:nth-child(1) > div.casino-coupon__labels');
        await expect(couponlabel).toBeDisplayed();
    });

    it('Test 16: Redirect coupon title for List Of Online Casinos block',  async () => {
        const RedirectCoponTitle = await $('div:nth-child(1) > div.casino-coupon__content > a');
        await RedirectCoponTitle.click();
    });

    it('Test 17: Redirect Get Free Spins button for List Of Online Casinos block',  async () => {
        const GetFreeSpinsBtn = await browser.$('div:nth-child(1) > div.casino-coupon__button > a');
        await GetFreeSpinsBtn.click();
    });

    it('Test 18: Redirect Get Bonus button for Coupons filter tab',  async () => {
        const GetBonusBtn = await browser.$('div:nth-child(8) > div.casino-coupon__button > a');
        await GetBonusBtn.click();
    });

    it('Test 19: Works Show more buttons on coupons',  async () => {
        const ShowMoreexpand = await browser.$('div:nth-child(2) > div.casino-coupon__footer > div.casino-coupon__desc.show-more-js > button');
        await ShowMoreexpand.click();
        const ShowMorecollapse = await browser.$('div:nth-child(2) > div.casino-coupon__footer > div.casino-coupon__desc.show-more-js > button');
        await ShowMorecollapse.click();
    });

    it('Test 20: Displayed Basic Info for slot',  async () => {
        const BasicInfo = await $('div.basic-info > div > div > div:nth-child(1)');
        await expect(BasicInfo).toBeDisplayed();
    });

    it('Test 21: Displayed Block [Slot Name] Symbols and Paytable',  async () => {
        const SymbolsPaytable = await $('body > div.symbol')
        await expect(SymbolsPaytable).toBeDisplayed()
    });

    it('Test 22: Check img for Block [Slot Name] Symbols and Paytable',  async () => {
        const ImgSymbolsPaytable = await $('div > div:nth-child(1) > div.symbol__img > img')
        await expect(ImgSymbolsPaytable).toBeDisplayed()
        const altImg = $('document.querySelector("div > div:nth-child(1) > div.symbol__img > img)')
        expect(altImg).toHaveAttr('alt')
    });

    it('Test 23: Check Table of Content block', async () => {
        const TocBlock  = await $('section.content-rule.content-rule--front > div > div > label');
        await TocBlock.click();
        const TocTitle = await $('section.content-rule.content-rule--front > div > div > div > ol > li:nth-child(5) > a');
        await TocTitle.click();
    });

    it('Test 24: Check Related Slots block',  async () => {
        const RelatedSlots = await $('div.related-slots > div > div');
        await expect(RelatedSlots).toBeDisplayed();
    });
    
    it('Test 25: Displayed Subscribe block',  async () => {
        const Subscribe = await $('body > section.subscribe');
        await expect(Subscribe).toBeDisplayed();
    });

    it('Test 26: Check Subscribe block', async  () => {
        const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
        await SubscribeDesc.addValue('automationtest@gmail.com');
        const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
        await checkbox.click();
        const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
        await submitBtn.click();
    });
});