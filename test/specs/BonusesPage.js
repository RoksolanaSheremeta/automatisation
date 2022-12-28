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

    it('Test 9: Breadcrubs works', async () => {
        const Breadcrubs = await browser.$('#breadcrumbs > span > span > a')
        await Breadcrubs.click()
        await expect(browser).toHaveUrl('https://gamblizard.com/')
    });

    it('Test 10: Deals available block',  async () => {
        const Dealsavailable = await browser.$('div > div.firstscreen-count__deals')
        await expect(Dealsavailable).toBeDisplayed()
    });

    it('Test 11: Displayed Categories sidebar',  async () => {
        const Categoriesdebar = await browser.$('div.filter-sidebar__list')
        await expect(Categoriesdebar).toBeDisplayed()
    });

    it('Test 12: Works links in the Categories sidebar',  async () => {
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

    it('Test 13: Displayed Popular Casinos block',  async () => {
        const BestDealTop = await browser.$('div.casinos-sidebar > div.casinos-sidebar__wrap')
        await expect(BestDealTop).toBeDisplayed()
    });

    it('Test 14: Works regirect logo on the casino page in the Popular Casinos block',  async () => {
        const PopularCasinosLogo = await browser.$('div.casinos-sidebar__wrap > div:nth-child(1) > div > a')
        await PopularCasinosLogo.click()
        const PopularCasinosLogoUrl = await expect(browser)
        await PopularCasinosLogoUrl.toHaveUrl('https://gamblizard.com/casinos/casino2020-bonus/')
    });

    it('Test 15: Search in the firstscreen', async () =>  {
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

    it('Test 16: Redirect coupon title',  async () => {
        const RedirectCoponTitle = await browser.$('div:nth-child(1) > div.casino-coupon__content > a')
        await RedirectCoponTitle.click()
    });

    it('Test 17: Redirect Get Free Spins button',  async () => {
        const GetFreeSpinsBtn = await browser.$('div:nth-child(3) > div.casino-coupon__button > a')
        await GetFreeSpinsBtn.click()
    });

    it('Test 18: Redirect Get Bonus button',  async () => {
        const GetBonusBtn = await browser.$('div:nth-child(1) > div.casino-coupon__button > a')
        await GetBonusBtn.click()
    });

    it('Test 19: Works casino logo',  async () => {
        const Casinologo = await browser.$("div:nth-child(4) > div:nth-child(2) > a:nth-child(1)")
        await Casinologo.click()
        const CasinoLogoUrl = await expect(browser)
        const CasinoLogoText = await $('div.firstscreen-casino__info > h1')
        await expect(CasinoLogoText).toHaveText('MrQ Casino Review & Bonus Codes Just for You')
    });

    it('Test 20: Works Show more buttons on coupons',  async () => {
        await browser.$('div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > button:nth-child(1)').click()
        await browser.$('div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > button:nth-child(1)').click()
    });

    it('Test 21: Works Content more buttons on coupons',  async () => {
        await browser.$("div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1) > button:nth-child(4)").click()
        await browser.$("div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1) > button:nth-child(4)").click()
    });

    it('Test 22: Works Pagination',  async () => {
        await browser.$("a[title='Page 2']").click()
        await browser.$(".pagination__prev").click()
    });

    // it('Test 23: Check Subscribe block', async  () => {
    //     const SubscribeEmail = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email')
    //     await SubscribeEmail.addValue('automationtest@gmail.com')
    //     const checkbox = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__checkbox > div > label')
    //     await checkbox.click()
    //     const GetmoreoffersBtn = await $('div.container > section > div > div > div.subscribe__left > div > form > div.sign-up__item > button')
    //     await GetmoreoffersBtn.click()
    // });

    it('Test 24: Displayed More Popular Bonuses & Promo Codes',  async () => {
        const PopularBonuses = await browser.$('div.popular-codes__slider.popular-codes__slider-js.owl-carousel.owl-loaded.owl-drag')
        await expect(PopularBonuses).toBeDisplayed()
    });

    it('Test 25: Works slider for More Popular Bonuses & Promo Codes',  async () => {
        await browser.$("div[class='owl-dots'] button:nth-child(2)").click()
        await browser.$("button[class='owl-dot active']").click()
    });

    it('Test 26: Check Table of Content block', async () => {
        await browser.$('.toc__title.show-more-btn-js').click()
        await browser.$("a[href='#no-deposit-bonuses-vs-other-bonuses']").click()
    });

    it('Test 37: Check FAQ block',  async () => {
        await browser.$("section.faq > div > div > div:nth-child(3)").click()
        await browser.$("section.faq > div > div > div:nth-child(5)").click()
    });

    it('Test 38: Displayed Subscribe block',  async () => {
        const Subscribe = await browser.$(".subscribe")
        await expect(Subscribe).toBeDisplayed()
    });

    // it('Test 29: Check Subscribe block', async  () => {
    //     const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email')
    //     await SubscribeDesc.addValue('automationtest@gmail.com')
    //     const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label')
    //     await checkbox.click()
    //     const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button')
    //     await submitBtn.click()
    // });
});