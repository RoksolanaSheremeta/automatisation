const assert = require('assert');



describe('Gamblizard For "Casino review page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/casinos/magical-vegas-bonus/');
        await browser.setWindowSize(1552, 840);
    });

    it('Test 1: Check to Have Title', async () => {
        await browser.getTitle();
        await expect(browser).toHaveTitle('Latest Magical Vegas Bonus Codes for UK Users | What’s New in July 2022');
    });

    it('Test 2: Canonical',async () => {
        const canonical = await browser.$("link[rel='canonical']");
        const canonicalUrl = await canonical.getAttribute('href');
        assert.strictEqual(canonicalUrl, 'https://gamblizard.com/casinos/magical-vegas-bonus/');
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
        browser.url('https://gamblizard.com/casinos/magical-vegas-bonus/');
        const altLogo = $('document.querySelector("body > header > div > div > a")');
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
        const Breadcrubs = await browser.$('span > span > span:nth-child(3) > a');
        await Breadcrubs.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/casinos/');
        const pageOfSearch = await browser.$('div.casinos-tmp.casinos-tmp--js > div > h1');
        await expect(pageOfSearch).toHaveText('Online Casino Index: UKGC Online Casinos Directory');
    });

    it('Test 10: Deals available block',  async () => {
        const Dealsavailable = await browser.$('body > section.firstscreen-casino > div > div > div.firstscreen-casino__info > p');
        await expect(Dealsavailable).toBeDisplayed();
    });

    it('Test 11: Displayed Сasino logo block',  async () => {
        const Сasinologo = await browser.$('section.firstscreen-casino > div > div > div.firstscreen-casino__logo');
        await expect(Сasinologo).toBeDisplayed();
        const altLogo = $('document.querySelector("section.firstscreen-casino > div > div > div.firstscreen-casino__logo > img")');
        expect(altLogo).toHaveAttr('alt')
    });

    it('Test 12: Displayed Casino sidebar',  async () => {
        const Casinosidebar = await browser.$('section.casino-main > div > div.casino-sidebar');
        await expect(Casinosidebar).toBeDisplayed();
    });

    it('Test 13: h2 Casino sidebar block',  async () => {
        const CasinosidebarH2 = await browser.$('div > div.casino-sidebar > h2');
        await expect(CasinosidebarH2).toHaveText('About Magical Vegas');
    });

    it('Test 14: Redirect Visit Casino button',  async () => {
        const VisitCasinoBtn = await browser.$('section.casino-main > div > div.casino-sidebar > a');
        await VisitCasinoBtn.click();
    });

    it('Test 15: Displayed Casino sidebar author',  async () => {
        const Casinosidebarauthor = await browser.$('section.casino-main > div > div.casino-sidebar > div.casino-sidebar__author');
        await expect(Casinosidebarauthor).toBeDisplayed();
    });

    it('Test 16: Displayed Casino sidebar support',  async () => {
        const Casinosidebarsupport = await $('section.casino-main > div > div.casino-sidebar > table:nth-child(9)');
        await expect(Casinosidebarsupport).toBeDisplayed();
    });

    it('Test 17: Work Coupons filter tab',  async () => {
        const AllDealstab = await $('div.casino-coupons > ul > li:nth-child(1)');
        await AllDealstab.click();
        const NoDeposittab = await $('div.casino-coupons > ul > li:nth-child(2)');
        await NoDeposittab.click();
        const Deposittab = await $('div.casino-coupons > ul > li:nth-child(3)');
        await Deposittab.click();
        const FreeSpinstab = await $('div.casino-coupons > ul > li:nth-child(4)');
        await FreeSpinstab.click();
    });

    it('Test 18: Redirect coupon title for Coupons filter tab',  async () => {
        const RedirectCoponTitle = await $('div > div:nth-child(1) > div.casino-coupon__content > a');
        await RedirectCoponTitle.click();
    });

    it('Test 19: Redirect Get Free Spins button for Coupons filter tab',  async () => {
        const GetFreeSpinsBtn = await browser.$('div:nth-child(2) > div.casino-coupon__button > a');
        await GetFreeSpinsBtn.click();
    });

    it('Test 20: Redirect Get Bonus button for Coupons filter tab',  async () => {
        const GetBonusBtn = await browser.$('div:nth-child(1) > div.casino-coupon__button > a');
        await GetBonusBtn.click();
    });

    it('Test 21: Works casino logo for No Deposit tab',  async () => {
        const NoDeposittab = await $('div.casino-coupons > ul > li:nth-child(2)');
        await NoDeposittab.click();
        const NoDepositlogo = await browser.$('div:nth-child(1) > div.casino-coupon__logo > a');
        await NoDepositlogo.click();
        const NoDepositLogoUrl = await expect(browser);
        await NoDepositLogoUrl.toHaveUrl('https://gamblizard.com/casinos/mrq-casino-bonus/');
    });

    it('Test 22: Works Show more buttons on Coupons filter tab',  async () => {
        const ShowMoreexpand = await browser.$('div > div:nth-child(1) > div.casino-coupon__footer div.casino-coupon__desc.show-more-js > button');
        await ShowMoreexpand.click();
        const ShowMorecollapse = await browser.$('div > div:nth-child(1) > div.casino-coupon__footer > div.casino-coupon__desc.show-more-js.active > button');
        await ShowMorecollapse.click();
    });

    it('Test 23: Displayed User Reviews Of Magical Vegas block',  async () => {
        const Reviews = await browser.$('div.user-reviews > div > div');
        await expect(Reviews).toBeDisplayed();
    });

    it('Test 24: Displayed Н3 for User Reviews Of Magical Vegas block',  async () => {
        const ReviewsH3 = await browser.$('div.user-reviews > div > h3');
        await expect(ReviewsH3).toHaveText('User Reviews Of Magical Vegas');
    });

    it('Test 25: Check User Reviews Of Magical Vegas block', async  () => {
        const YourNameinput = await $('div.user-reviews__wrap > form > input:nth-child(4)');
        await YourNameinput.addValue('Automation test name');
        const Emailinput = await $('div.user-reviews__wrap > form > input:nth-child(5)');
        await Emailinput.addValue('automationtest@gmail.com');
        const Textarea = await $('div.user-reviews__wrap > form > textarea');
        await Textarea.addValue('Automation test area');
        const checkbox = await $('div.user-reviews__wrap > form > div > div > label');
        await checkbox.click();
        const submitBtn = await $('div.user-reviews__wrap > form > button');
        await submitBtn.click();
        const ThankYoublock = await browser.$('div.user-reviews__wrap > div');
        await expect(ThankYoublock).toBeDisplayed();
        const ClosetBtn = await $('div.user-reviews__wrap > div > button');
        await ClosetBtn.click();
    });

    it('Test 26: Check Table of Content block', async () => {
        const TocBlock  = await browser.$('section.content-rule.content-rule--front > div > div > label');
        await TocBlock.click();
        const TocTitle = await browser.$('div > div > div > ol > li:nth-child(1) > a');
        await TocTitle.click();
    });

    it('Test 27: Check FAQ block',  async () => {
        const faqquestion = await browser.$('section.faq > div > div > div:nth-child(3)');
        await faqquestion.click();
        const faqquestion2 = await browser.$('section.faq > div > div > div:nth-child(5)');
        await faqquestion2.click();
    });

    it('Test 28: Check More Popular Casinos block and H2',  async () => {
        const MorePopularCasinos = await browser.$('div.popular-casinos__content.popular-casinos-slider-js.owl-carousel.owl-loaded.owl-drag');
        await expect(MorePopularCasinos).toBeDisplayed();
    });

    it('Test 29: Check Subscribe block', async  () => {
        const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
        await SubscribeDesc.addValue('automationtest@gmail.com');
        const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
        await checkbox.click();
        const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
        await submitBtn.click();
    });
});