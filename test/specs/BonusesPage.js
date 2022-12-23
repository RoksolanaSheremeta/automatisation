const assert = require('assert');



describe('Gamblizard For "Bonuses page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/no-deposit-bonuses/')
        await browser.setWindowSize(1552, 840)
    });

    it('Test 1: Check to Have Title',async() => {
        await browser.url('https://gamblizard.com/no-deposit-bonuses/')
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining('Latest No Deposit Casino Bonus in UK [December 2022 ] ☀️ GambLizard')
        await $("link[rel='canonical']")
    });

    it('Test 2: Canonical', async () => {
        const canonical = await browser.$(`link[rel='canonical']`)
        await expect(canonical).toBePresent()
        const linkcanonical = await $(`link[rel='canonical']`)
        await expect(linkcanonical).toHaveLink('https://gamblizard.com/no-deposit-bonuses/')
    });

    it('Test 3: Check Canonical should be only one', async () => {
        const canonAmount = await $$("link[rel='canonical']")
    });

    it('Test 4: Check of Description', async () => {
        const description = await $("meta[name='description']")
        const descLength = await description.getAttribute('content')
    });
    
    it('Test 5: Check URL logo', async () => {
        const logoUrl = await $("/html/body/header/div/div/a/img")
        let logoUrlGetAtr = await logoUrl.getAttribute('href')
    });
    
    it('Test 6: Check alt for URL logo', () => {
        browser.url('https://gamblizard.com/')
        const altLogo = $('document.querySelector("body > div > div > div > div.bfad93f > header > div > span > img")')
        expect(altLogo).toHaveAttr('alt')
    });

    it('Test 7: Check H1 on page', () => {
        const h1 = $('input')
        expect(h1).toHaveAttribute('h1 class')
    });

    it('Test 8: Logo redirection', async () => {
        const logoredirection = await browser.$('body > header > div > div > a')
        await logoredirection.click()
        const logoredirectionUrlExp = await expect(browser)
        await logoredirectionUrlExp.toHaveUrl('https://gamblizard.com/')
    });

    it('Test 9: Check Main menu', async () => {
        const NoDepositBonuses = await $("/html/body/header/div/div/div/nav/ul/li[1]/a")
        expect(NoDepositBonuses).toHaveTextContaining('No Deposit Bonuses')

        const FreeSpins = await $('/html/body/header/div/div/div/nav/ul/li[2]/a')
        expect(FreeSpins).toHaveTextContaining('Free Spins')

        const DepositBonuses = await $('/html/body/header/div/div/div/nav/ul/li[3]/a')
        expect(DepositBonuses).toHaveTextContaining('Deposit Bonuses')

        const QualityCasinos = await $('/html/body/header/div/div/div/nav/ul/li[4]/a')
        expect(QualityCasinos).toHaveTextContaining('Quality Casinos')

        const Slots = await $('/html/body/header/div/div/div/nav/ul/li[5]/a')
        expect(Slots).toHaveTextContaining('Slots')
    });

    it('Test 10: No Deposit Bonuses redirect button in menu',  async () => {
        const NoDepositBons = await browser.$('body > header > div > div > div > ul > li:nth-child(1) > a')
        await NoDepositBons.click()
        const NoDepositBonsSub = await browser.$('body > header > div > div > div > ul > li.menu__item.menu__item--children.menu__item--children-js.active > div > div.sub-menu__title > a')
        await NoDepositBonsSub.click()
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/')
        await expect(await browser.$('body > section.firstscreen-count > div > div > h1')).toHaveText('Latest No Deposit Casino Bonuses')
    });

   it('Test 11: Tool in header NAV redirection of drop-down list',  async () => {
        const NoDepositBons = await browser.$('body > header > div > div > div > ul > li:nth-child(1) > a')
        await NoDepositBons.click()
        const CouponCodes = await browser.$('body > header > div > div > div > ul > li.menu__item.menu__item--children.menu__item--children-js.active > div > div.sub-menu__inner > div:nth-child(1) > div > ul > li:nth-child(5) > a')
        await CouponCodes.click()
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/bonus-codes/')
        await expect( await browser.$('body > section.firstscreen-count > div > div > h1')).toHaveText('The List of Newest No Deposit Casino Bonus Codes')
    });

    it('Test 12: Breadcrubs works', async () => {
        const Breadcrubs = await browser.$('#breadcrumbs > span > span > a')
        await Breadcrubs.click()
        await expect(browser).toHaveUrl('https://gamblizard.com/')
    });

    it('Test 13: Deals available block',  async () => {
        const Dealsavailable = await browser.$('div > div.firstscreen-count__deals')
        await expect(Dealsavailable).toBeDisplayed()
    });

    it('Test 14: Displayed Categories sidebar',  async () => {
        const Categoriesdebar = await browser.$('div.filter-sidebar__list')
        await expect(Categoriesdebar).toBeDisplayed()
    });

    it('Test 15: Works links in the Categories sidebar',  async () => {
        const ByTypelink = await $('div.filter-sidebar__list > div:nth-child(1) > div.filter-sidebar__content.accordion-content-js > p > a:nth-child(1)')
        await ByTypelink.click()
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/no-wagering/')
        const ByTypeText = await $('section.firstscreen-count > div > div > h1')
        await expect(ByTypeText).toHaveText('No Wager No Deposit Bonus Offers')
        const ByGamelink = await $('div.filter-sidebar__list > div:nth-child(2) > div.filter-sidebar__content.accordion-content-js > p > a:nth-child(3)')
        await ByGamelink.click()
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/poker-bonuses/')
        const ByGameText = await $('section.firstscreen-count > div > div > h1')
        await expect(ByGameText).toHaveText('List of The Best Poker No Deposit Bonus Offers')
        const BonusValuelink = await $('div.filter-sidebar__list > div:nth-child(3) > div.filter-sidebar__content.accordion-content-js > p > a:nth-child(6)')
        await BonusValuelink.click()
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/30-free-no-deposit-casino-bonus/')
        const BonusValueText = await $('section.firstscreen-count > div > div > h1')
        await expect(BonusValueText).toHaveText('£30 Free No Deposit Bonuses')
        const WayOfPlayinglink = await $('div.filter-sidebar__list > div:nth-child(4) > div.filter-sidebar__content.accordion-content-js > p > a:nth-child(1)')
        await WayOfPlayinglink.click()
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/live-casino-bonuses/')
        const WayOfPlayingText = await $('section.firstscreen-count > div > div > h1')
        await expect(WayOfPlayingText).toHaveText('Live Casino No Deposit Bonuses')
        const ByNumberOfSpinslink = await $('div:nth-child(5) > div.filter-sidebar__content.accordion-content-js > p > a:nth-child(1)')
        await ByNumberOfSpinslink.click()
        await expect(browser).toHaveUrl('https://gamblizard.com/free-spins/5-free-spins/')
        const ByNumberOfSpinsText = await $('section.firstscreen-count > div > div > h1')
        await expect(ByNumberOfSpinsText).toHaveText('5 Free Spins On Registration No Deposit in 2022')
    });

    it('Test 16: Displayed Popular Casinos block',  async () => {
        const BestDealTop = await browser.$('div.casinos-sidebar > div.casinos-sidebar__wrap')
        await expect(BestDealTop).toBeDisplayed()
    });

    it('Test 17: Works regirect logo on the casino page in the Popular Casinos block',  async () => {
        const PopularCasinosLogo = await browser.$('div.casinos-sidebar__wrap > div:nth-child(1) > div > a')
        await PopularCasinosLogo.click()
        const PopularCasinosLogoUrl = await expect(browser)
        await PopularCasinosLogoUrl.toHaveUrl('https://gamblizard.com/casinos/casino2020-bonus/')
    });

    it('Test 18: Search in the firstscreen', async () =>  {
        await browser.url('https://gamblizard.com/free-spins/bonus-codes-free-spins/')
        await browser.$(".filter-casino__content-select-js").moveTo()
        await $("input[class='filter-casino__content-search-js']").setValue("21")
        await browser.pause(3000)
        //let items = await $$("[class='filter-casino__content-list scroll-block'] li")
        await browser.$("section[class='type-main'] li:nth-child(2)").click()
        await browser.pause(3000)
        // for(var i=0; i< await items.lenght; i++)
        // {
        //     if(await items[i].getText() === "21 Bets Casino")
        //     {
        //             await items[i].click
        //             await browser.pause(3000)
        //     }
        // }
    });

    it('Test 19: Redirect coupon title',  async () => {
        const RedirectCoponTitle = await browser.$('div:nth-child(1) > div.casino-coupon__content > a')
        await RedirectCoponTitle.click()
    });

    it('Test 20: Redirect Get Free Spins button',  async () => {
        const GetFreeSpinsBtn = await browser.$('div:nth-child(3) > div.casino-coupon__button > a')
        await GetFreeSpinsBtn.click()
    });

    it('Test 21: Redirect Get Bonus button',  async () => {
        const GetBonusBtn = await browser.$('div:nth-child(1) > div.casino-coupon__button > a')
        await GetBonusBtn.click()
    });

    it('Test 22: Works casino logo',  async () => {
        const Casinologo = await browser.$("div:nth-child(4) > div:nth-child(2) > a:nth-child(1)")
        await Casinologo.click()
        const CasinoLogoUrl = await expect(browser)
        const CasinoLogoText = await $('div.firstscreen-casino__info > h1')
        await expect(CasinoLogoText).toHaveText('MrQ Casino Review & Bonus Codes Just for You')
    });

    it('Test 23: Works Show more buttons on coupons',  async () => {
        await browser.$('div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > button:nth-child(1)').click()
        await browser.$('div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > button:nth-child(1)').click()
    });

    it('Test 24: Works Content more buttons on coupons',  async () => {
        await browser.$("div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1) > button:nth-child(4)").click()
        await browser.$("div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1) > button:nth-child(4)").click()
    });

    it('Test 25: Works Pagination',  async () => {
        await browser.$("a[title='Page 2']").click()
        await browser.$(".pagination__prev").click()
    });

    // it('Test 26: Check Subscribe block', async  () => {
    //     const SubscribeEmail = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email')
    //     await SubscribeEmail.addValue('automationtest@gmail.com')
    //     const checkbox = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__checkbox > div > label')
    //     await checkbox.click()
    //     const GetmoreoffersBtn = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__item > button')
    //     await GetmoreoffersBtn.click()
    // });

    it('Test 27: Displayed More Popular Bonuses & Promo Codes',  async () => {
        const PopularBonuses = await browser.$('div.popular-codes__slider.popular-codes__slider-js.owl-carousel.owl-loaded.owl-drag')
        await expect(PopularBonuses).toBeDisplayed()
    });

    it('Test 28: Works slider for More Popular Bonuses & Promo Codes',  async () => {
        await browser.$("div[class='owl-dots'] button:nth-child(2)").click()
        await browser.$("button[class='owl-dot active']").click()
    });

    it('Test 29: Check Table of Content block', async () => {
        await browser.$('.toc__title.show-more-btn-js').click()
        await browser.$("a[href='#no-deposit-bonuses-vs-other-bonuses']").click()
    });

    it('Test 30: Check FAQ block',  async () => {
        await browser.$("section.faq > div > div > div:nth-child(3)").click()
        await browser.$("section.faq > div > div > div:nth-child(5)").click()
    });

    it('Test 31: Displayed Subscribe block',  async () => {
        const Subscribe = await browser.$(".subscribe")
        await expect(Subscribe).toBeDisplayed()
    });

    // it('Test 32: Check Subscribe block', async  () => {
    //     const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email')
    //     await SubscribeDesc.addValue('automationtest@gmail.com')
    //     const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label')
    //     await checkbox.click()
    //     const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button')
    //     await submitBtn.click()
    // });

    it('Test 33: Footer column BONUSES', async () => {
        const bonusName = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > p')
        await expect(bonusName).toHaveText('BONUSES')
        const NoDepositBonus = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(1) > a')
        const NoDepositBonusUrl = await NoDepositBonus.getAttribute('href')
        assert.strictEqual(NoDepositBonusUrl, '/no-deposit-bonuses/')
        const freespins = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(2) > a')
        const freespinsUrl = await freespins.getAttribute('href')
        assert.strictEqual(freespinsUrl, '/free-spins/')
        const DepositBonuses = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(3) > a')
        const DepositBonusesUrl = await DepositBonuses.getAttribute('href')
        assert.strictEqual(DepositBonusesUrl, '/deposit-bonuses/')
        const BestCasinoSites = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(1) > nav > div > div > div > ul > li:nth-child(5) > a')
        const BestCasinoSitesUrl = await BestCasinoSites.getAttribute('href')
        assert.strictEqual(BestCasinoSitesUrl, '/best-uk-online-casinos/')
    })

    it('Test 34: Footer column COMPANY', async () => {
        const conpanyName = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > p')
        await expect(conpanyName).toHaveText('COMPANY')
        const GambLizardBlog = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(1) > a')
        const GambLizardBlogUrl = await GambLizardBlog.getAttribute('href')
        assert.strictEqual(GambLizardBlogUrl, '/blog/')
        const AboutUs = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(2) > a')
        const AboutUsUrl = await AboutUs.getAttribute('href')
        assert.strictEqual(AboutUsUrl, '/about-us/')
        const ContactUs = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(3) > a')
        const ContactUsUrl = await ContactUs.getAttribute('href')
        assert.strictEqual(ContactUsUrl, '/contact-us/')
        const ResponsibleGambling = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(2) > nav > div > div > div > ul > li:nth-child(4) > a')
        const ResponsibleGamblingUrl = await ResponsibleGambling.getAttribute('href')
        assert.strictEqual(ResponsibleGamblingUrl, '/responsible-gambling/')
    });

    it('Test 35: Footer bottom links', async () => {
        const bottomLinks = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(3) > div > div.footer__logos-left > p')
        await expect(bottomLinks).toBeDisplayed()
        const PrivacyPolicy = await browser.$('body > footer > div.footer__bottom > div > div > div.footer__links > div > div > div > p > a:nth-child(1)')
        const PrivacyPolicyUrl = await PrivacyPolicy.getAttribute('href')
        assert.strictEqual(PrivacyPolicyUrl, '/privacy-policy/')
        const TermsConditions = await browser.$('body > footer > div.footer__bottom > div > div > div.footer__links > div > div > div > p > a:nth-child(2)')
        const TermsConditionsUrl = await TermsConditions.getAttribute('href')
        assert.strictEqual(TermsConditionsUrl, '/terms/')
        const CookiesPolicy = await browser.$('body > footer > div.footer__bottom > div > div > div.footer__links > div > div > div > p > a:nth-child(3)')
        const CookiesPolicyUrl = await CookiesPolicy.getAttribute('href')
        assert.strictEqual(CookiesPolicyUrl, '/cookies-policy/')
    });
});