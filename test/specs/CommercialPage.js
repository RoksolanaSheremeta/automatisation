const assert = require('assert');



describe('Gamblizard For "Commercial page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/best-uk-online-casinos/');
        await browser.setWindowSize(1552, 840);
    });

//     it('Test 1: Check to Have Title', async () => {
//         await browser.getTitle();
//         await expect(browser).toHaveTitle('Best UK Online Casino Sites with Quality Games and Bonuses in 2022');
//     });

//     it('Test 2: Canonical',async () => {
//         const canonical = await browser.$("link[rel='canonical']");
//         const canonicalUrl = await canonical.getAttribute('href');
//         assert.strictEqual(canonicalUrl, 'https://gamblizard.com/best-uk-online-casinos/');
//     });

//     it('Test 3: Check Canonical should be only one', async () => {
//         const canonAmount = await $$("link[rel='canonical']");
//     });

//     it('Test 4: Check of Description', async () => {
//         const description = await $("meta[name='description']");
//         const descLength = await description.getAttribute('content');
//     });
    
//     it('Test 5: Check URL logo', async () => {
//         const logoUrl = await $("/html/body/header/div/div/a/img");
//         let logoUrlGetAtr = await logoUrl.getAttribute('href');
//     });
    
//     it('Test 6: Check alt for URL logo', () => {
//         browser.url('https://gamblizard.com/');
//         const altLogo = $('document.querySelector("body > div > div > div > div.bfad93f > header > div > span > img")');
//         expect(altLogo).toHaveAttr('alt')
//     });

//     it('Test 7: Check H1 on page', () => {
//         const h1 = $('input')
//         expect(h1).toHaveAttribute('h1 class')
//     });

//     it('Test 8: Logo redirection', async () => {
//         const logoredirection = await $('body > header > div > div > a');
//         await logoredirection.click();
//         const logoredirectionUrlExp = await expect(browser);
//         await logoredirectionUrlExp.toHaveUrl('https://gamblizard.com/');
//     });

//     it('Test 9: Check Main menu', async () => {
//         const NoDepositBonuses = await $("/html/body/header/div/div/div/nav/ul/li[1]/a");
//         expect(NoDepositBonuses).toHaveTextContaining('No Deposit Bonuses')

//         const FreeSpins = await $('/html/body/header/div/div/div/nav/ul/li[2]/a');
//         expect(FreeSpins).toHaveTextContaining('Free Spins')

//         const DepositBonuses = await $('/html/body/header/div/div/div/nav/ul/li[3]/a');
//         expect(DepositBonuses).toHaveTextContaining('Deposit Bonuses')

//         const QualityCasinos = await $('/html/body/header/div/div/div/nav/ul/li[4]/a');
//         expect(QualityCasinos).toHaveTextContaining('Quality Casinos')

//         const Slots = await $('/html/body/header/div/div/div/nav/ul/li[5]/a');
//         expect(Slots).toHaveTextContaining('Slots')
//     });

//     it('Test 10: No Deposit Bonuses redirect button in menu',  async () => {
//         const NoDepositBons = await browser.$('body > header > div > div > div > ul > li:nth-child(1) > a');
//         await NoDepositBons.click();
//         const NoDepositBonsSub = await browser.$('body > header > div > div > div > ul > li.menu__item.menu__item--children.menu__item--children-js.active > div > div.sub-menu__title > a');
//         await NoDepositBonsSub.click();
//         await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/');
//         await expect(await browser.$('body > section.firstscreen-count > div > div > h1')).toHaveText('Latest No Deposit Casino Bonuses');
//     });

//    it('Test 11: Tool in header NAV redirection of drop-down list',  async () => {
//         const NoDepositBons = await browser.$('body > header > div > div > div > ul > li:nth-child(1) > a');
//         await NoDepositBons.click();
//         const CouponCodes = await browser.$('body > header > div > div > div > ul > li.menu__item.menu__item--children.menu__item--children-js.active > div > div.sub-menu__inner > div:nth-child(1) > div > ul > li:nth-child(5) > a');
//         await CouponCodes.click();
//         await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/bonus-codes/');
//         await expect( await browser.$('body > section.firstscreen-count > div > div > h1')).toHaveText('The List of Newest No Deposit Casino Bonus Codes');
//     });

//     it('Test 12: Search in the header NAV', async () =>  {
//         const searchInput = await browser.$('.search-form__input-js');
//         // await browser.pause(3000);
//         await searchInput.addValue('10bet casino');
//         const searchInputResult = await browser.$('.search-form__result-wrap.tab-block-js > div > div > a > p');
//         await expect(searchInputResult).toHaveText('10bet Casino');
//         const searchcontentlink = await browser.$('div.search-form__result > div.search-form__result-wrap.tab-block-js > div > div > a');
//         await searchcontentlink.click();
//         await expect(browser).toHaveUrl('https://gamblizard.com/casinos/10bet-casino-bonus/');
//         const pageOfSearch = await browser.$('body > section.firstscreen-casino > div > div > div.firstscreen-casino__info > h1');
//         await expect(pageOfSearch).toHaveText('10bet Casino Bonus Promo Codes For UK Players');
//     });

//     it('Test 13: Search in the firstscreen coupon', async () =>  {
//         const searchInput = await browser.$('.search-form__input-js');
//         // await browser.pause(3000);
//         await searchInput.addValue('coupon');
//         const searchInputResult = await browser.$('.result-content__block-js > a:nth-child(1)');
//         await searchInputResult.waitForDisplayed({ timeout: 10000 });
//         await expect(searchInputResult).toHaveText('Sign Up Offer for You - Deposit £5 Receive £25 Bingo Bonus with Coupon Code');
//         const searchcontentlink = await browser.$('body > header > div > div > div.header__form > form > div.search-form__result > div.search-form__result-wrap.tab-block-js > div > div > a:nth-child(1)');
//         await searchcontentlink.click();
//         await expect(browser).toHaveUrl('https://gamblizard.com/casinos/kitty-bingo-bonus/');
//         const pageOfSearch2 = await browser.$('body > section.firstscreen-casino > div > div > div.firstscreen-casino__info > h1');
//         await expect(pageOfSearch2).toHaveText('Latest Kitty Bingo Bonus Codes in 2022');
//     });

//     it('Test 14: Empty results Search', async () =>  {
//         const searchInput = await browser.$('.search-form__input-js');
//         await browser.pause(3000);
//         await searchInput.addValue('testxbfb');
//         const searchEmptyResult = await browser.$('div.search-form__result.empty > div.search-form__empty');
//         await expect(searchEmptyResult).toBeDisplayed();
//     });

    it('Test 15: Breadcrubs works', async () => {
        const Breadcrubs = await $('#breadcrumbs > span > span > a');
        await Breadcrubs.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/');
    });

    it('Test 16: Displayed Categories sidebar',  async () => {
        const Categoriesdebar = await browser.$('div.filter-sidebar__list');
        await expect(Categoriesdebar).toBeDisplayed();
    });

    it('Test 17: Works links in the Categories sidebar',  async () => {
        const GamblingSites = await $('div:nth-child(1) > div.filter-sidebar__content.accordion-content-js > ul > li:nth-child(2) > a');
        await GamblingSites.click();
        const ByMobileOS = await $('div:nth-child(2) > div.filter-sidebar__content.accordion-content-js > ul > li:nth-child(1) > a');
        await ByMobileOS.click();
        const ByDevices = await $('div:nth-child(3) > div.filter-sidebar__content.accordion-content-js > ul > li:nth-child(2) > a');
        await ByDevices.click();
        const ByPaymentOption = await $('div:nth-child(4) > div.filter-sidebar__content.accordion-content-js > ul > li:nth-child(7) > a');
        await ByPaymentOption.click();
    });

    it('Test 18: Works regirect logo on the commercial page',  async () => {
        const CommercialLogo = await browser.$('div:nth-child(1) > div.coupon-com__logo > a > img');
        await CommercialLogo.click();
        const CommercialLogoUrl = await expect(browser);
        await CommercialLogoUrl.toHaveUrl('https://gamblizard.com/casinos/mrq-casino-bonus/');
    });
    
    it('Test 19: Redirect coupon title on the commercial page',  async () => {
        const RedirectCoponTitle = await browser.$('div:nth-child(1) > div.coupon-com__info > a');
        await RedirectCoponTitle.click();
    });

    it('Test 20: Redirect Visit Casino button',  async () => {
        const VisitCasinoBtn = await browser.$('div.commercial-pages__coupons.commercial-coupons-js > div:nth-child(2) > a');
        await VisitCasinoBtn.click();
    });

    it('Test 21: Works Content more buttons on coupons',  async () => {
        const ContentMoreexpand = await browser.$('div:nth-child(1) > div.coupon-com__tands > div > div > p > button > svg');
        await ContentMoreexpand.click();
        const ContentMorecollapse = await browser.$('div:nth-child(1) > div.coupon-com__tands > div > div > p > button > svg');
        await ContentMorecollapse.click();
    });


    // it('Test 16: Check Slot provider',  async () => {
    //     const Slotprovider = await $('div.container > div.single-slot__header > p');
    //     await expect(Slotprovider).toBeDisplayed();
    // });

    // it('Test 17: Check Get Free Spins button for slot',  async () => {
    //     const GetFreeSpins = await $('div.single-slot__content-bottom.div4-grid > button');
    //     await GetFreeSpins.click();
    // });

    // it('Test 18: Displayed Slot logo block',  async () => {
    //     const Slotlogo = await $('div.single-slot__content-img.div1-grid.show-iframe-wrap-js');
    //     await expect(Slotlogo).toBeDisplayed();
    //     const altLogo = $('document.querySelector("div.single-slot__content-img.div1-grid.show-iframe-wrap-js > img")');
    //     expect(altLogo).toHaveAttr('alt')
    // });

    // it('Test 19: Check List Of Online Casinos',  async () => {
    //     const ListOfOnlineCasinos = await $('#list > div > div');
    //     await expect(ListOfOnlineCasinos).toBeDisplayed();
    // });

    // it('Test 20: Check logo for List Of Online Casinos block',  async () => {
    //     const LogofOnlineCasinos = await $('div:nth-child(1) > div.casino-coupon__logo');
    //     await expect(LogofOnlineCasinos).toBeDisplayed();
    //     const altLogo = $('document.querySelector("div:nth-child(1) > div.casino-coupon__logo > a > img)');
    //     expect(altLogo).toHaveAttr('alt')
    // });

    // it('Test 21: Check coupon label for List Of Online Casinos block',  async () => {
    //     const couponlabel = await $('div:nth-child(1) > div.casino-coupon__labels');
    //     await expect(couponlabel).toBeDisplayed();
    // });

    // it('Test 22: Redirect coupon title for List Of Online Casinos block',  async () => {
    //     const RedirectCoponTitle = await $('div:nth-child(1) > div.casino-coupon__content > a');
    //     await RedirectCoponTitle.click();
    // });

    // it('Test 23: Redirect Get Free Spins button for List Of Online Casinos block',  async () => {
    //     const GetFreeSpinsBtn = await browser.$('div:nth-child(1) > div.casino-coupon__button > a');
    //     await GetFreeSpinsBtn.click();
    // });

    // it('Test 24: Redirect Get Bonus button for Coupons filter tab',  async () => {
    //     const GetBonusBtn = await browser.$('div:nth-child(8) > div.casino-coupon__button > a');
    //     await GetBonusBtn.click();
    // });

    // it('Test 25: Works Show more buttons on coupons',  async () => {
    //     const ShowMoreexpand = await browser.$('div:nth-child(2) > div.casino-coupon__footer > div.casino-coupon__desc.show-more-js > button');
    //     await ShowMoreexpand.click();
    //     const ShowMorecollapse = await browser.$('div:nth-child(2) > div.casino-coupon__footer > div.casino-coupon__desc.show-more-js > button');
    //     await ShowMorecollapse.click();
    // });

    // it('Test 26: Displayed Basic Info for slot',  async () => {
    //     const BasicInfo = await $('div.basic-info > div > div > div:nth-child(1)');
    //     await expect(BasicInfo).toBeDisplayed();
    // });

    // it('Test 27: Check Table of Content block', async () => {
    //     const TocBlock  = await $('section.content-rule.content-rule--front > div > div > label');
    //     await TocBlock.click();
    //     const TocTitle = await $('section.content-rule.content-rule--front > div > div > div > ol > li:nth-child(5) > a');
    //     await TocTitle.click();
    // });

    // it('Test 28: Check Related Slots block',  async () => {
    //     const RelatedSlots = await $('div.related-slots > div > div');
    //     await expect(RelatedSlots).toBeDisplayed();
    // });
    
    // it('Test 29: Displayed Subscribe block',  async () => {
    //     const Subscribe = await $('body > section.subscribe');
    //     await expect(Subscribe).toBeDisplayed();
    // });

    // it('Test 30: Check Subscribe block', async  () => {
    //     const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
    //     await SubscribeDesc.addValue('automationtest@gmail.com');
    //     const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
    //     await checkbox.click();
    //     const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
    //     await submitBtn.click();
    // });

    it('Test 31: Footer column BONUSES', async () => {
        const bonusName = await $('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > p');
        await expect(bonusName).toHaveText('BONUSES');
        const NoDepositBonus = await $('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(1) > a');
        const NoDepositBonusUrl = await NoDepositBonus.getAttribute('href');
        assert.strictEqual(NoDepositBonusUrl, '/no-deposit-bonuses/');
        const freespins = await $('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(2) > a');
        const freespinsUrl = await freespins.getAttribute('href');
        assert.strictEqual(freespinsUrl, '/free-spins/');
        const DepositBonuses = await $('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(3) > a');
        const DepositBonusesUrl = await DepositBonuses.getAttribute('href');
        assert.strictEqual(DepositBonusesUrl, '/deposit-bonuses/');
        const BestCasinoSites = await $('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(5) > a');
        const BestCasinoSitesUrl = await BestCasinoSites.getAttribute('href');
        assert.strictEqual(BestCasinoSitesUrl, '/best-uk-online-casinos/');
    });

    it('Test 32: Footer column COMPANY', async () => {
        const conpanyName = await $('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > p');
        await expect(conpanyName).toHaveText('COMPANY');
        const GambLizardBlog = await $('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(1) > a');
        const GambLizardBlogUrl = await GambLizardBlog.getAttribute('href');
        assert.strictEqual(GambLizardBlogUrl, '/blog/');
        const AboutUs = await $('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(2) > a');
        const AboutUsUrl = await AboutUs.getAttribute('href');
        assert.strictEqual(AboutUsUrl, '/about-us/');
        const ContactUs = await $('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(3) > a');
        const ContactUsUrl = await ContactUs.getAttribute('href');
        assert.strictEqual(ContactUsUrl, '/contact-us/');
        const ResponsibleGambling = await $('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(4) > a');
        const ResponsibleGamblingUrl = await ResponsibleGambling.getAttribute('href');
        assert.strictEqual(ResponsibleGamblingUrl, '/responsible-gambling/');
    });

    it('Test 33: Footer bottom links', async () => {
        const bottomLinks = await $('body > footer > div.footer__top > div > div > div:nth-child(3) > div > div.footer__logos-left > p');
        await expect(bottomLinks).toBeDisplayed();
        const PrivacyPolicy = await $('body > footer > div.footer__bottom > div > div > div.footer__links > div > div > div > p > a:nth-child(1)');
        const PrivacyPolicyUrl = await PrivacyPolicy.getAttribute('href');
        assert.strictEqual(PrivacyPolicyUrl, '/privacy-policy/');
        const TermsConditions = await $('body > footer > div.footer__bottom > div > div > div.footer__links > div > div > div > p > a:nth-child(2)');
        const TermsConditionsUrl = await TermsConditions.getAttribute('href');
        assert.strictEqual(TermsConditionsUrl, '/terms/');
        const CookiesPolicy = await $('body > footer > div.footer__bottom > div > div > div.footer__links > div > div > div > p > a:nth-child(3)');
        const CookiesPolicyUrl = await CookiesPolicy.getAttribute('href');
        assert.strictEqual(CookiesPolicyUrl, '/cookies-policy/');
    });
});