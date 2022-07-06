const assert = require('assert');



describe('Gamblizard For "Bonuses page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/no-deposit-bonuses/');
        await browser.setWindowSize(1552, 840);
    });

    it('Test 1: Check to Have Title', async () => {
        await browser.getTitle();
        await expect(browser).toHaveTitle('Latest No Deposit Casino Bonuses in the UK [July 2022 ] - GambLizard');
    });

    it('Test 2: Canonical',async () => {
        const canonical = await browser.$("link[rel='canonical']");
        const canonicalUrl = await canonical.getAttribute('href');
        assert.strictEqual(canonicalUrl, 'https://gamblizard.com/no-deposit-bonuses/');
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
        const Breadcrubs = await browser.$('#breadcrumbs > span > span > a');
        await Breadcrubs.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/');
    });

    it('Test 16: Deals available block',  async () => {
        const Dealsavailable = await browser.$('div > div.firstscreen-count__deals');
        await expect(Dealsavailable).toBeDisplayed();
    });

    it('Test 17: Displayed Categories sidebar',  async () => {
        const Categoriesdebar = await browser.$('div.filter-sidebar__list');
        await expect(Categoriesdebar).toBeDisplayed();
    });

    it('Test 18: Works links in the Categories sidebar',  async () => {
        const ByTypelink = await browser.$('div.filter-sidebar__list > div:nth-child(1) > div.filter-sidebar__content.accordion-content-js > p > a:nth-child(1)');
        await ByTypelink.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/no-wagering/');
        const ByTypeText = await browser.$('section.firstscreen-count > div > div > h1');
        await expect(ByTypeText).toHaveText('List of No Wagering No Deposit Bonuses');
        const ByGamelink = await browser.$('div.filter-sidebar__list > div:nth-child(2) > div.filter-sidebar__content.accordion-content-js > p > a:nth-child(3)');
        await ByGamelink.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/poker-bonuses/');
        const ByGameText = await browser.$('section.firstscreen-count > div > div > h1');
        await expect(ByGameText).toHaveText('List of The Best Poker No Deposit Bonus Offers');
        const BonusValuelink = await browser.$('div.filter-sidebar__list > div:nth-child(3) > div.filter-sidebar__content.accordion-content-js > p > a:nth-child(6)');
        await BonusValuelink.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/30-free-no-deposit-casino-bonus/');
        const BonusValueText = await browser.$('section.firstscreen-count > div > div > h1');
        await expect(BonusValueText).toHaveText('£30 Free No Deposit Bonuses');
        const WayOfPlayinglink = await browser.$('div.filter-sidebar__list > div:nth-child(4) > div.filter-sidebar__content.accordion-content-js > p > a:nth-child(1)');
        await WayOfPlayinglink.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/live-casino-bonuses/');
        const WayOfPlayingText = await browser.$('section.firstscreen-count > div > div > h1');
        await expect(WayOfPlayingText).toHaveText('Live Casino No Deposit Bonuses');
        const ByNumberOfSpinslink = await browser.$('div.filter-sidebar__list > div:nth-child(5) > div.filter-sidebar__content.accordion-content-js > p > a:nth-child(12)');
        await ByNumberOfSpinslink.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/free-spins/80-free-spins/');
        const ByNumberOfSpinsText = await browser.$('section.firstscreen-count > div > div > h1');
        await expect(ByNumberOfSpinsText).toHaveText('80 Free Spins - No Deposit and First deposit Deals');
    });

    it('Test 19: Displayed Popular Casinos block',  async () => {
        const BestDealTop = await browser.$('div.casinos-sidebar > div.casinos-sidebar__wrap');
        await expect(BestDealTop).toBeDisplayed();
    });

    it('Test 20: Works regirect logo on the casino page in the Popular Casinos block',  async () => {
        const PopularCasinosLogo = await browser.$('div.casinos-sidebar__wrap > div:nth-child(1) > div > a');
        await PopularCasinosLogo.click();
        const PopularCasinosLogoUrl = await expect(browser);
        await PopularCasinosLogoUrl.toHaveUrl('https://gamblizard.com/casinos/casino2020-bonus/');
    });

    // it('Test 20: Redirect coupon title for Best Casino Offers top block',  async () => {
    //     const RedirectCoponTitle = await browser.$('div.best-deals__left > div > div.card__bottom > a');
    //     await RedirectCoponTitle.click();
    // });

    // it('Test 21: Redirect Get Free Spins button for Best Casino Offers top block',  async () => {
    //     const GetFreeSpinsBtn = await browser.$('div.card__bottom > div.card__button > a');
    //     await GetFreeSpinsBtn.click();
    // });

    // it('Test 22: Works casino logo for Deals of the day tab',  async () => {
    //     const DealsOfTheDay = await browser.$('.best-deals__header > li:nth-child(1)');
    //     await DealsOfTheDay.click();
    //     await expect(DealsOfTheDay).toHaveText('Deals of the day');
    //     const DealsCasinoLogo = await browser.$('.best-deals__block.tab-content-js.active > div:nth-child(1) > div.coupon__logo > a');
    //     await DealsCasinoLogo.click();
    //     const DealsCasinoLogoUrl = await expect(browser);
    //     await DealsCasinoLogoUrl.toHaveUrl('https://gamblizard.com/casinos/jeffbet-casino-bonus/');
    // });

    // it('Test 23: Work Deals of the day tab',  async () => {
    //     const DealsOfTheDay = await browser.$('.best-deals__header > li:nth-child(1)');
    //     await DealsOfTheDay.click();
    //     const NewOffers = await browser.$('.best-deals__header > li:nth-child(2)');
    //     await NewOffers.click();
    //     const ExclusiveOffers = await browser.$('.best-deals__header > li:nth-child(3)');
    //     await ExclusiveOffers.click();
    // });

    // it('Test 24: Redirect Get Bonus button for Best Casino Offers top block',  async () => {
    //     const GetBonusBtn = await browser.$('div.best-deals__block.tab-content-js.active > div:nth-child(4)');
    //     await GetBonusBtn.click();
    // });

    // it('Test 25: Works T&Cs Apply buttons on in tne Best Casino Offers block',  async () => {
    //     const TCsApplyexpand = await browser.$('div.card__tandc > div > div > p > button');
    //     await TCsApplyexpand.click();
    //     const TCsApplycollapse = await browser.$('div.card__tandc > div > div > p > button');
    //     await TCsApplycollapse.click();
    // });

    // it('Test 26: Displayed What our partners say block',  async () => {
    //     const partners = await browser.$('.partners-say__slider-js');
    //     await expect(partners).toBeDisplayed();
    // });

    // it('Test 27: h2 Our Team Recommends block',  async () => {
    //     const TeamRecommendsH2 = await browser.$('body > main > section.recomended-casino > div > h2');
    //     await expect(TeamRecommendsH2).toHaveText('Our Team Recommends');
    // });

    // it('Test 28: Our Team Recommends block', async () => {
    //     const RecomendedCasinoTop = await browser.$('body > main > section.recomended-casino > div > div > div.recomended-casino__top > div > div > a');
    //     const RecomendedCasinoTopUrl = await RecomendedCasinoTop.getAttribute('href');
    //     assert.strictEqual(RecomendedCasinoTopUrl, 'https://gamblizard.com/casinos/21-casino-bonus/');
    //     const RecomendedCasino = await browser.$('body > main > section.recomended-casino > div > div > div.recomended-casino__bottom > div:nth-child(1) > div > a');
    //     const RecomendedCasinoUrl = await RecomendedCasino.getAttribute('href');
    //     assert.strictEqual(RecomendedCasinoUrl, 'https://gamblizard.com/casinos/bet-uk-casino-bonus/');
    // });

    // it('Test 29: Works casino logo for Our Team Recommends block',  async () => {
    //     const RecomendedCasinoTop = await browser.$('div.recomended-casino__top > div > div > a');
    //     await RecomendedCasinoTop.click();
    //     const RecomendedCasinoTopUrl = await expect(browser);
    //     await RecomendedCasinoTopUrl.toHaveUrl('https://gamblizard.com/casinos/21-casino-bonus/');
    // });

    // it('Test 30: Our Team Recommends click on casino',  async () => {
    //     const TeamRecommendsCasino = await browser.$('div.recomended-casino__bottom > div:nth-child(4) > div > a');
    //     await TeamRecommendsCasino.click();
    //     const TeamRecommendsCasinoUrl = await expect(browser);
    //     await TeamRecommendsCasinoUrl.toHaveUrl('https://gamblizard.com/casinos/gopro-casino-bonus/');
    // });

    // it('Test 31: h2 Top Casino Bonuses block',  async () => {
    //     const TopBonusesH2 = await browser.$('body > main > section.bonuses > div > div > div.bonuses__left.bonuses-slide-js > h2');
    //     await expect(TopBonusesH2).toHaveText('Top Casino Bonuses');
    // });

    // it('Test 32: Top Casino Bonuses block click on casino logo', async () => {
    //     const BonusesCasinoLogo = await browser.$('body > main > section.bonuses > div > div > div.bonuses__right > div > div > div.bonuses__block.tab-content-js.active > div:nth-child(1) > div.coupon__logo > a');
    //     await BonusesCasinoLogo.click();
    //     const BonusesCasinoLogoUrl = await expect(browser);
    //     await BonusesCasinoLogoUrl.toHaveUrl('https://gamblizard.com/casinos/all-british-casino-bonus/');
    // });

    // it('Test 33: Top Casino Bonuses block click on coupon title', async () => {
    //     const BonusesCouponTitle = await browser.$('body > main > section.bonuses > div > div > div.bonuses__right > div > div > div.bonuses__block.tab-content-js.active > div:nth-child(1) > div.coupon__content > a');
    //     await BonusesCouponTitle.click();
    //     //await browser.newWindow('https://ref.gamblizard.com/25p66X')
    //     //await expect(browser).toHaveUrlContaining('https://ref.gamblizard.com/');
    // });

    // it('Test 34: Redirect Get Bonus button for Top Casino Bonuses block',  async () => {
    //     const GetBonusBtn = await browser.$('div.bonuses__block.tab-content-js.active > div:nth-child(1)');
    //     await GetBonusBtn.click();
    // });

    // it('Test 35: Work Top Casino Bonuses tabs',  async () => {
    //     const Highest = await browser.$('div.bonuses__right > div > ul > li:nth-child(1)');
    //     await Highest.click();
    //     const FreeSpins = await browser.$('div.bonuses__right > div > ul > li:nth-child(2)');
    //     await FreeSpins.click();
    //     const NoDeposit = await browser.$('div.bonuses__right > div > ul > li:nth-child(3)');
    //     await NoDeposit.click();
    //     const Deposit = await browser.$('div.bonuses__right > div > ul > li:nth-child(4)');
    //     await Deposit.click();
    // });

    // it('Test 36: Team Of Experts block',  async () => {
    //     const experts = await browser.$('.experts');
    //     await expect(experts).toBeDisplayed();
    // });

    // it('Test 37: Team Of Experts block click on More about us button', async () => {
    //     const MoreAboutBtn = await browser.$('body > main > section.experts > div > div > a');
    //     await expect(MoreAboutBtn).toHaveText('More about us');
    //     await MoreAboutBtn.click();
    //     const MoreAboutBtnUrl = await expect(browser);
    //     await MoreAboutBtnUrl.toHaveUrl('https://gamblizard.com/about-us/#Team');
    // });

    it('Test 33: Check FAQ block',  async () => {
        const faqquestion = await browser.$('section.faq > div > div > div:nth-child(3)');
        await faqquestion.click();
        const faqquestion2 = await browser.$('section.faq > div > div > div:nth-child(5)');
        await faqquestion2.click();
    });

    // it('Test 38: Displayed Subscribe block',  async () => {
    //     const Subscribe = await browser.$('body > main > section.subscribe');
    //     await expect(Subscribe).toBeDisplayed();
    // });

    // it('Test 39: Check Subscribe block', async  () => {
    //     const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
    //     await SubscribeDesc.addValue('automationtest@gmail.com');
    //     const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
    //     await checkbox.click();
    //     const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
    //     await submitBtn.click();
    // });

    it('Test 40: Footer column BONUSES', async () => {
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

    it('Test 41: Footer column COMPANY', async () => {
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

    it('Test 43: Footer bottom links', async () => {
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