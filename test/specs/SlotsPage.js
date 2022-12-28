const assert = require('assert');



describe('Gamblizard For "Slots page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/slots/');
        await browser.setWindowSize(1552, 840);
    });

    it('Test 1: Check to Have Title', async () => {
        await browser.getTitle();
        await expect(browser).toHaveTitle('Best Online Slots and New Games 2022 in the UK');
    });

    it('Test 2: Canonical',async () => {
        const canonical = await browser.$("link[rel='canonical']");
        const canonicalUrl = await canonical.getAttribute('href');
        assert.strictEqual(canonicalUrl, 'https://gamblizard.com/slots/');
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

    it('Test 10: Deals available block',  async () => {
        const Dealsavailable = await $('div > div.firstscreen-count__deals');
        await expect(Dealsavailable).toBeDisplayed();
    });

    it('Test 11: Displayed slots filter',  async () => {
        const slotsfilter = await $('div > div.slots-main__filter.slots-filter');
        await expect(slotsfilter).toBeDisplayed();
    });

    it('Test 12: Check Game providers filter',  async () => {
        const Gameproviders = await $('div.slots-main__filter.slots-filter > div.slots-filter__filter.slot-filter-js.slots-filter__filter--long');
        await Gameproviders.click();
        const FilterGameproviders = await $('div.slots-filter__filter.slot-filter-js.slots-filter__filter--long > div > ul > li:nth-child(1) > div');
        await FilterGameproviders.click();
        const FilterGameproviders2 = await $('div.slots-filter__filter.slot-filter-js.slots-filter__filter--long > div > ul > li:nth-child(2) > div');
        await FilterGameproviders2.click();
    });

    it('Test 13: Check Clear all for slots filter',  async () => {
        const Gameproviders = await $('div.slots-main__filter.slots-filter > div.slots-filter__filter.slot-filter-js.slots-filter__filter--long');
        await Gameproviders.click();
        const FilterGameproviders = await $('div.slots-filter__filter.slot-filter-js.slots-filter__filter--long > div > ul > li:nth-child(1) > div');
        await FilterGameproviders.click();
        const FilterGameproviders2 = await $('div.slots-filter__filter.slot-filter-js.slots-filter__filter--long > div > ul > li:nth-child(2) > div');
        await FilterGameproviders2.click();
        const ClearallBtn = await $('div.slots-filter__filter.slot-filter-js.slots-filter__filter--long > div > div > button');
        await ClearallBtn.click();
    });

    it('Test 14: Check RTP and Volatility filters',  async () => {
        const RTPfilter = await $('#filter-slot > div:nth-child(2)');
        await RTPfilter.click();
        const RTPfilterinput = await $('#filter-slot div:nth-child(2) > div > ul > li:nth-child(2) > div');
        await RTPfilterinput.click();
        const RTPfilterinput2 = await $('#filter-slot > div:nth-child(2) > div > ul > li:nth-child(4) > div');
        await RTPfilterinput2.click();
        const Volatility = await $('#filter-slot > div:nth-child(3)');
        await Volatility.click();
        const Volatilityinput = await $('#filter-slot > div:nth-child(3) > div > ul > li:nth-child(1) > div');
        await Volatilityinput.click();
    });

    it('Test 15: Check regirect title for slot',  async () => {
        const Slotstitle = await $('div:nth-child(1) > div.slots-card__content > a.slots-card__title');
        await Slotstitle.click();
        const SlotstitleUrl = await expect(browser);
        await SlotstitleUrl.toHaveUrl('https://gamblizard.com/slots/book-of-ra-free-spins/');
        await expect(await browser.$('div.container > div.single-slot__header > h1')).toHaveText('Book of Ra Free Spins');
    });

    it('Test 16: Check Get Free Spins button',  async () => {
        const GetFreeSpins = await $('div:nth-child(3) > div.slots-card__content > a.btn.btn--blue.slots-card__btn');
        await GetFreeSpins.click();
        await expect(await browser.$('div.container > div.single-slot__header > h1')).toHaveText('Mega Joker Slots Free Spins');
    });

    it('Test 17: Works Pagination',  async () => {
        const Pagination2 = await $('div.pagination > div > a:nth-child(2)');
        await Pagination2.click();
        const Paginationprev = await $('div.pagination > a.pagination__prev');
        await Paginationprev.click();
    });

    it('Test 18: Displayed Subscribe block after pagination',  async () => {
        const Subscribe = await $('body > div.container > section');
        await expect(Subscribe).toBeDisplayed();
    });

    // it('Test 19: Check Subscribe block', async  () => {
    //     const SubscribeEmail = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
    //     await SubscribeEmail.addValue('automationtest@gmail.com');
    //     const checkbox = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
    //     await checkbox.click();
    //     const GetmoreoffersBtn = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__item > button');
    //     await GetmoreoffersBtn.click();
    // });

    it('Test 20: Check Table of Content block', async () => {
        const TocBlock  = await $('section.content-rule.content-rule--front > div > div > label');
        await TocBlock.click();
        const TocTitle = await $('section.content-rule.content-rule--front > div > div > div > ol > li:nth-child(5) > a');
        await TocTitle.click();
    });
    
    it('Test 21: Check FAQ block',  async () => {
        const faqquestion = await $('section.faq > div > div > div:nth-child(3)');
        await faqquestion.click();
        const faqquestion2 = await $('section.faq > div > div > div:nth-child(5)');
        await faqquestion2.click();
    });

    it('Test 22: Displayed Subscribe block',  async () => {
        const Subscribe = await $('body > section.subscribe');
        await expect(Subscribe).toBeDisplayed();
    });

    it('Test 23: Check Subscribe block', async  () => {
        const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
        await SubscribeDesc.addValue('automationtest@gmail.com');
        const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
        await checkbox.click();
        const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
        await submitBtn.click();
    });
});