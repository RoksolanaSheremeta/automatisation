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

    it('Test 9: Check Main menu', async () => {
        const NoDepositBonuses = await $("/html/body/header/div/div/div/nav/ul/li[1]/a");
        expect(NoDepositBonuses).toHaveTextContaining('No Deposit Bonuses')

        const FreeSpins = await $('/html/body/header/div/div/div/nav/ul/li[2]/a');
        expect(FreeSpins).toHaveTextContaining('Free Spins')

        const DepositBonuses = await $('/html/body/header/div/div/div/nav/ul/li[3]/a');
        expect(DepositBonuses).toHaveTextContaining('Deposit Bonuses')

        const QualityCasinos = await $('/html/body/header/div/div/div/nav/ul/li[4]/a');
        expect(QualityCasinos).toHaveTextContaining('Quality Casinos')

        const Slots = await $('/html/body/header/div/div/div/nav/ul/li[5]/a');
        expect(Slots).toHaveTextContaining('Slots')
    });

    it('Test 10: No Deposit Bonuses redirect button in menu',  async () => {
        const NoDepositBons = await browser.$('body > header > div > div > div > ul > li:nth-child(1) > a');
        await NoDepositBons.click();
        const NoDepositBonsSub = await browser.$('body > header > div > div > div > ul > li.menu__item.menu__item--children.menu__item--children-js.active > div > div.sub-menu__title > a');
        await NoDepositBonsSub.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/');
        await expect(await browser.$('body > section.firstscreen-count > div > div > h1')).toHaveText('Latest No Deposit Casino Bonuses');
    });

    it('Test 11: Tool in header NAV redirection of drop-down list',  async () => {
        const NoDepositBons = await browser.$('body > header > div > div > div > ul > li:nth-child(1) > a');
        await NoDepositBons.click();
        const CouponCodes = await browser.$('body > header > div > div > div > ul > li.menu__item.menu__item--children.menu__item--children-js.active > div > div.sub-menu__inner > div:nth-child(1) > div > ul > li:nth-child(5) > a');
        await CouponCodes.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/bonus-codes/');
        await expect( await browser.$('body > section.firstscreen-count > div > div > h1')).toHaveText('The List of Newest No Deposit Casino Bonus Codes');
    });

    it('Test 12: Search in the header NAV', async () =>  {
        const searchInput = await browser.$('.search-form__input-js');
        // await browser.pause(3000);
        await searchInput.addValue('10bet casino');
        const searchInputResult = await browser.$('.search-form__result-wrap.tab-block-js > div > div > a > p');
        await expect(searchInputResult).toHaveText('10bet Casino');
        const searchcontentlink = await browser.$('div.search-form__result > div.search-form__result-wrap.tab-block-js > div > div > a');
        await searchcontentlink.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/casinos/10bet-casino-bonus/');
        const pageOfSearch = await browser.$('body > section.firstscreen-casino > div > div > div.firstscreen-casino__info > h1');
        await expect(pageOfSearch).toHaveText('10bet Casino Bonus Promo Codes For UK Players');
    });

    it('Test 13: Search in the firstscreen coupon', async () =>  {
        const searchInput = await browser.$('.search-form__input-js');
        // await browser.pause(3000);
        await searchInput.addValue('coupon');
        const searchInputResult = await browser.$('.result-content__block-js > a:nth-child(1)');
        await searchInputResult.waitForDisplayed({ timeout: 10000 });
        await expect(searchInputResult).toHaveText('Sign Up Offer for You - Deposit £5 Receive £25 Bingo Bonus with Coupon Code');
        const searchcontentlink = await browser.$('body > header > div > div > div.header__form > form > div.search-form__result > div.search-form__result-wrap.tab-block-js > div > div > a:nth-child(1)');
        await searchcontentlink.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/casinos/kitty-bingo-bonus/');
    });

    it('Test 14: Empty results Search', async () =>  {
        const searchInput = await browser.$('.search-form__input-js');
        await browser.pause(3000);
        await searchInput.addValue('testxbfb');
        const searchEmptyResult = await browser.$('div.search-form__result.empty > div.search-form__empty');
        await expect(searchEmptyResult).toBeDisplayed();
    });

    it('Test 15: Breadcrubs works', async () => {
        const Breadcrubs = await browser.$('span > span > span:nth-child(3) > a');
        await Breadcrubs.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/casinos/');
        const pageOfSearch = await browser.$('div.casinos-tmp.casinos-tmp--js > div > h1');
        await expect(pageOfSearch).toHaveText('Online Casino Index: UKGC Online Casinos Directory');
    });

    it('Test 16: Deals available block',  async () => {
        const Dealsavailable = await browser.$('body > section.firstscreen-casino > div > div > div.firstscreen-casino__info > p');
        await expect(Dealsavailable).toBeDisplayed();
    });

    it('Test 17: Displayed Сasino logo block',  async () => {
        const Сasinologo = await browser.$('section.firstscreen-casino > div > div > div.firstscreen-casino__logo');
        await expect(Сasinologo).toBeDisplayed();
        const altLogo = $('document.querySelector("section.firstscreen-casino > div > div > div.firstscreen-casino__logo > img")');
        expect(altLogo).toHaveAttr('alt')
    });

    it('Test 18: Displayed Casino sidebar',  async () => {
        const Casinosidebar = await browser.$('section.casino-main > div > div.casino-sidebar');
        await expect(Casinosidebar).toBeDisplayed();
    });

    it('Test 19: h2 Casino sidebar block',  async () => {
        const CasinosidebarH2 = await browser.$('div > div.casino-sidebar > h2');
        await expect(CasinosidebarH2).toHaveText('About Magical Vegas');
    });

    it('Test 20: Redirect Visit Casino button',  async () => {
        const VisitCasinoBtn = await browser.$('section.casino-main > div > div.casino-sidebar > a');
        await VisitCasinoBtn.click();
    });

    it('Test 21: Displayed Casino sidebar author',  async () => {
        const Casinosidebarauthor = await browser.$('section.casino-main > div > div.casino-sidebar > div.casino-sidebar__author');
        await expect(Casinosidebarauthor).toBeDisplayed();
    });

    it('Test 22: Displayed Casino sidebar support',  async () => {
        const Casinosidebarsupport = await $('section.casino-main > div > div.casino-sidebar > table:nth-child(9)');
        await expect(Casinosidebarsupport).toBeDisplayed();
    });

    it('Test 23: Work Coupons filter tab',  async () => {
        const AllDealstab = await $('div.casino-coupons > ul > li:nth-child(1)');
        await AllDealstab.click();
        const NoDeposittab = await $('div.casino-coupons > ul > li:nth-child(2)');
        await NoDeposittab.click();
        const Deposittab = await $('div.casino-coupons > ul > li:nth-child(3)');
        await Deposittab.click();
        const FreeSpinstab = await $('div.casino-coupons > ul > li:nth-child(4)');
        await FreeSpinstab.click();
    });

    it('Test 24: Redirect coupon title for Coupons filter tab',  async () => {
        const RedirectCoponTitle = await $('div > div:nth-child(1) > div.casino-coupon__content > a');
        await RedirectCoponTitle.click();
    });

    it('Test 25: Redirect Get Free Spins button for Coupons filter tab',  async () => {
        const GetFreeSpinsBtn = await browser.$('div:nth-child(2) > div.casino-coupon__button > a');
        await GetFreeSpinsBtn.click();
    });

    it('Test 26: Redirect Get Bonus button for Coupons filter tab',  async () => {
        const GetBonusBtn = await browser.$('div:nth-child(1) > div.casino-coupon__button > a');
        await GetBonusBtn.click();
    });

    it('Test 27: Works casino logo for No Deposit tab',  async () => {
        const NoDeposittab = await $('div.casino-coupons > ul > li:nth-child(2)');
        await NoDeposittab.click();
        const NoDepositlogo = await browser.$('div:nth-child(1) > div.casino-coupon__logo > a');
        await NoDepositlogo.click();
        const NoDepositLogoUrl = await expect(browser);
        await NoDepositLogoUrl.toHaveUrl('https://gamblizard.com/casinos/mrq-casino-bonus/');
    });

    it('Test 28: Works Show more buttons on Coupons filter tab',  async () => {
        const ShowMoreexpand = await browser.$('div > div:nth-child(1) > div.casino-coupon__footer div.casino-coupon__desc.show-more-js > button');
        await ShowMoreexpand.click();
        const ShowMorecollapse = await browser.$('div > div:nth-child(1) > div.casino-coupon__footer > div.casino-coupon__desc.show-more-js.active > button');
        await ShowMorecollapse.click();
    });

    it('Test 29: Displayed User Reviews Of Magical Vegas block',  async () => {
        const Reviews = await browser.$('div.user-reviews > div > div');
        await expect(Reviews).toBeDisplayed();
    });

    it('Test 30: Displayed Н3 for User Reviews Of Magical Vegas block',  async () => {
        const ReviewsH3 = await browser.$('div.user-reviews > div > h3');
        await expect(ReviewsH3).toHaveText('User Reviews Of Magical Vegas');
    });

    it('Test 31: Check User Reviews Of Magical Vegas block', async  () => {
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

    it('Test 32: Check Table of Content block', async () => {
        const TocBlock  = await browser.$('section.content-rule.content-rule--front > div > div > label');
        await TocBlock.click();
        const TocTitle = await browser.$('div > div > div > ol > li:nth-child(1) > a');
        await TocTitle.click();
    });

    it('Test 33: Check FAQ block',  async () => {
        const faqquestion = await browser.$('section.faq > div > div > div:nth-child(3)');
        await faqquestion.click();
        const faqquestion2 = await browser.$('section.faq > div > div > div:nth-child(5)');
        await faqquestion2.click();
    });

    it('Test 34: Check More Popular Casinos block and H2',  async () => {
        const MorePopularCasinos = await browser.$('div.popular-casinos__content.popular-casinos-slider-js.owl-carousel.owl-loaded.owl-drag');
        await expect(MorePopularCasinos).toBeDisplayed();
    });

    it('Test 35: Check Subscribe block', async  () => {
        const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
        await SubscribeDesc.addValue('automationtest@gmail.com');
        const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
        await checkbox.click();
        const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
        await submitBtn.click();
    });

    it('Test 36: Footer column BONUSES', async () => {
        const bonusName = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > p');
        await expect(bonusName).toHaveText('BONUSES');
        const NoDepositBonus = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(1) > a');
        const NoDepositBonusUrl = await NoDepositBonus.getAttribute('href');
        assert.strictEqual(NoDepositBonusUrl, '/no-deposit-bonuses/');
        const freespins = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(2) > a');
        const freespinsUrl = await freespins.getAttribute('href');
        assert.strictEqual(freespinsUrl, '/free-spins/');
        const DepositBonuses = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(3) > a');
        const DepositBonusesUrl = await DepositBonuses.getAttribute('href');
        assert.strictEqual(DepositBonusesUrl, '/deposit-bonuses/');
        const BestCasinoSites = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(5) > a');
        const BestCasinoSitesUrl = await BestCasinoSites.getAttribute('href');
        assert.strictEqual(BestCasinoSitesUrl, '/best-uk-online-casinos/');
    });

    it('Test 37: Footer column COMPANY', async () => {
        const conpanyName = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > p');
        await expect(conpanyName).toHaveText('COMPANY');
        const GambLizardBlog = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(1) > a');
        const GambLizardBlogUrl = await GambLizardBlog.getAttribute('href');
        assert.strictEqual(GambLizardBlogUrl, '/blog/');
        const AboutUs = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(2) > a');
        const AboutUsUrl = await AboutUs.getAttribute('href');
        assert.strictEqual(AboutUsUrl, '/about-us/');
        const ContactUs = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(3) > a');
        const ContactUsUrl = await ContactUs.getAttribute('href');
        assert.strictEqual(ContactUsUrl, '/contact-us/');
        const ResponsibleGambling = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(4) > a');
        const ResponsibleGamblingUrl = await ResponsibleGambling.getAttribute('href');
        assert.strictEqual(ResponsibleGamblingUrl, '/responsible-gambling/');
    });

    it('Test 38: Footer bottom links', async () => {
        const bottomLinks = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(3) > div > div.footer__logos-left > p');
        await expect(bottomLinks).toBeDisplayed();
        const PrivacyPolicy = await browser.$('body > footer > div.footer__bottom > div > div > div.footer__links > div > div > div > p > a:nth-child(1)');
        const PrivacyPolicyUrl = await PrivacyPolicy.getAttribute('href');
        assert.strictEqual(PrivacyPolicyUrl, '/privacy-policy/');
        const TermsConditions = await browser.$('body > footer > div.footer__bottom > div > div > div.footer__links > div > div > div > p > a:nth-child(2)');
        const TermsConditionsUrl = await TermsConditions.getAttribute('href');
        assert.strictEqual(TermsConditionsUrl, '/terms/');
        const CookiesPolicy = await browser.$('body > footer > div.footer__bottom > div > div > div.footer__links > div > div > div > p > a:nth-child(3)');
        const CookiesPolicyUrl = await CookiesPolicy.getAttribute('href');
        assert.strictEqual(CookiesPolicyUrl, '/cookies-policy/');
    });
});