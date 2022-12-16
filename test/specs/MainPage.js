const assert = require('assert');



describe('Gamblizard For "Main page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/');
        await browser.setWindowSize(1552, 840);
    });

    it('Test 1: Check to Have Title', async () => {
        await browser.getTitle();
        await expect(browser).toHaveTitle('GambLizard - Best Offers from UK Casino Bonus Sites in December 2022');
    });

    it('Test 2: Canonical',async () => {
        const canonical = await browser.$("link[rel='canonical']");
        const canonicalUrl = await canonical.getAttribute('href');
        assert.strictEqual(canonicalUrl, 'https://gamblizard.com/');
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

    it('Test 8: Check file robots.txt', () => {
        browser.url('https://gamblizard.com/robots.txt');
        const robotsTxt = $('/html/body/pre')
        expect(robotsTxt).toHaveTextContaining('User-agent', 'Disallow', 'Allow');
    });
    it('Test 9: Logo redirection', async () => {
        const navCategory = await browser.$('body > header > div > div > div > ul > li:nth-child(1) > a');
        await navCategory.click();
        const logoredirection = await browser.$('body > header > div > div > a');
        await logoredirection.click();
        const logoredirectionUrlExp = await expect(browser);
        await logoredirectionUrlExp.toHaveUrl('https://gamblizard.com/');
    });

    it('Test 10: Check Main menu', async () => {
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

    it('Test 11: No Deposit Bonuses redirect button in menu',  async () => {
        const NoDepositBons = await browser.$('body > header > div > div > div > ul > li:nth-child(1) > a');
        await NoDepositBons.click();
        const NoDepositBonsSub = await browser.$('body > header > div > div > div > ul > li.menu__item.menu__item--children.menu__item--children-js.active > div > div.sub-menu__title > a');
        await NoDepositBonsSub.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/');
        await expect( await browser.$('body > section.firstscreen-count > div > div > h1')).toHaveText('Latest No Deposit Casino Bonuses');
    });

    it('Test 12: Tool in header NAV redirection of drop-down list',  async () => {
        const NoDepositBons = await browser.$('body > header > div > div > div > ul > li:nth-child(1) > a');
        await NoDepositBons.click();
        const CouponCodes = await browser.$('body > header > div > div > div > ul > li.menu__item.menu__item--children.menu__item--children-js.active > div > div.sub-menu__inner > div:nth-child(1) > div > ul > li:nth-child(5) > a');
        await CouponCodes.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/no-deposit-bonuses/bonus-codes/');
        await expect( await browser.$('body > section.firstscreen-count > div > div > h1')).toHaveText('The List of Newest No Deposit Casino Bonus Codes');
    });

    it('Test 13: Search in the firstscreen', async () =>  {
        const searchInput = await browser.$('.search-form__input-js');
        await browser.pause(3000);
        await searchInput.addValue('10bet casino');
        const searchInputResult = await browser.$('.search-form__result-wrap.tab-block-js > div > div > a > p');
        await expect(searchInputResult).toHaveText('10bet Casino');
        const searchcontentlink = await browser.$('.search-form__result-wrap.tab-block-js > div > div > a');
        await searchcontentlink.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/casinos/10bet-casino-bonus/');
        const pageOfSearch = await browser.$('body > section.firstscreen-casino > div > div > div.firstscreen-casino__info > h1');
        await expect(pageOfSearch).toHaveText('10bet Casino Bonus Promo Codes For UK Players');
    });

    it('Test 14: Search in the firstscreen coupon', async () =>  {
        const searchInput = await browser.$('.search-form__input-js');
        await browser.pause(3000);
        await searchInput.addValue('coupon');
        const searchInputResult = await browser.$('.result-content__block-js > a:nth-child(3)');
        await searchInputResult.waitForDisplayed({ timeout: 10000 });
        await expect(searchInputResult).toHaveText('New Welcome Coupon Code – Deposit £10 Get £10 Bingo Bonus, 5 Bingo Tickets & 20 Free Spins');
        const searchcontentlink = await browser.$('body > main > section.firstscreen > div > div > div.firstscreen__left > div.firstscreen__form > form > div.search-form__result > div.search-form__result-wrap.tab-block-js > div > div > a:nth-child(3)');
        await searchcontentlink.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/casinos/bonnie-bingo-bonus/');
    });

    it('Test 15: Empty results Search', async () =>  {
        const searchInput = await browser.$('.search-form__input-js');
        await browser.pause(3000);
        await searchInput.addValue('testxbfb');
        const searchEmptyResult = await browser.$('div.search-form__result.empty > div.search-form__empty');
        await expect(searchEmptyResult).toBeDisplayed();
    });

    it('Test 16: Explore bonuses', async () => {
        const ExploreBonuses = await browser.$('body > main > section.firstscreen > div > div > div.firstscreen__left > div.firstscreen__bonus > p');
        await expect(ExploreBonuses).toHaveText('Explore bonuses');
        const NoDeposit = await browser.$('body > main > section.firstscreen > div > div > div.firstscreen__left > div.firstscreen__bonus > ul > li:nth-child(1) > a');
        const NoDepositUrl = await NoDeposit.getAttribute('href');
        assert.strictEqual(NoDepositUrl, '/no-deposit-bonuses/');
        const FreeSpins = await browser.$('body > main > section.firstscreen > div > div > div.firstscreen__left > div.firstscreen__bonus > ul > li:nth-child(2) > a');
        const FreeSpinsUrl = await FreeSpins.getAttribute('href');
        assert.strictEqual(FreeSpinsUrl, '/free-spins/');
        const FirstDeposit = await browser.$('body > main > section.firstscreen > div > div > div.firstscreen__left > div.firstscreen__bonus > ul > li:nth-child(3) > a');
        const FirstDepositUrl = await FirstDeposit.getAttribute('href');
        assert.strictEqual(FirstDepositUrl, '/deposit-bonuses/first-deposit-bonuses/');
        const Cashback = await browser.$('body > main > section.firstscreen > div > div > div.firstscreen__left > div.firstscreen__bonus > ul > li:nth-child(4) > a');
        const CashbackUrl = await Cashback.getAttribute('href');
        assert.strictEqual(CashbackUrl, '/deposit-bonuses/cashback-bonuses/');
        const NoWagering = await browser.$('body > main > section.firstscreen > div > div > div.firstscreen__left > div.firstscreen__bonus > ul > li:nth-child(5) > a');
        const NoWageringUrl = await NoWagering.getAttribute('href');
        assert.strictEqual(NoWageringUrl, '/deposit-bonuses/deposit-bonus-with-no-wagering-requirements/');
    });

    it('Test 17: h2 Top UK Casino Bonus Sites — Best Offers in 2022 block',  async () => {
        const BestDealsH2 = await browser.$('.best-deals__left > h2');
        await expect(BestDealsH2).toHaveText('Top UK Casino Bonus Sites — Best Offers in 2022');
    });

    it('Test 18: Top UK Casino Bonus Sites — Best Offers in 2022 top block',  async () => {
        const BestDealTop = await browser.$('.best-deals__left');
        await expect(BestDealTop).toBeDisplayed();
    });

    it('Test 19: Check modal-coupon popup open at first and click on "Works" btn',  async () => {
        await browser.url('https://gamblizard.com/')
        const GetFreeSpinsBtn  = await browser.$('body > main:nth-child(3) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > a:nth-child(1)')
        await GetFreeSpinsBtn.click();
        await browser.pause(4000);
        const modal = await $(".modal-coupon__content")
        await modal.waitForDisplayed()
        const radioButton = await $$('.modal-coupon__voice-btn-js')
        const userDropdown = radioButton[0]
        await userDropdown.click()
        //console.log(await $$(".modal-coupon__voice-btn-js")[0].$("span").isSelected())
    });

    it('Test 20: Check modal-coupon popup not to Be Displayed after after the second time',  async () => {
        await browser.url('https://gamblizard.com/')
        const GetFreeSpinsBtn  = await browser.$('body > main:nth-child(3) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > a:nth-child(1)')
        await GetFreeSpinsBtn.click();
        await browser.pause(4000);
        const modal = await $(".modal-coupon__content")
        await expect(modal).not.toBeDisplayed()
    });

    it('Test 21: Works casino logo for Top UK Casino Bonus Sites — Best Offers in 2022 top block',  async () => {
        const BestDealLogo = await browser.$('div.best-deals__left > div > div.card__top > a');
        await BestDealLogo.click();
        const BestDealLogoUrl = await expect(browser);
        await BestDealLogoUrl.toHaveUrl('https://gamblizard.com/casinos/kwiff-casino-bonus/');
    });

    it('Test 22: Redirect coupon title for Top UK Casino Bonus Sites — Best Offers in 2022 top block',  async () => {
        const RedirectCoponTitle = await browser.$('div.best-deals__left > div > div.card__bottom > a');
        await RedirectCoponTitle.click();
    });

    it('Test 23: Redirect Get Free Spins button for Top UK Casino Bonus Sites — Best Offers in 2022 top block',  async () => {
        const GetFreeSpinsBtn = await browser.$('div.card__bottom > div.card__button > a');
        await GetFreeSpinsBtn.click();
    });

    it('Test 24: Works casino logo for Deals of the day tab',  async () => {
        const DealsOfTheDay = await browser.$('.best-deals__header > li:nth-child(1)');
        await DealsOfTheDay.click();
        await expect(DealsOfTheDay).toHaveText('Deals of the day');
        const DealsCasinoLogo = await browser.$('.best-deals__block.tab-content-js.active > div:nth-child(1) > div.coupon__logo > a');
        await DealsCasinoLogo.click();
        const DealsCasinoLogoUrl = await expect(browser);
        await DealsCasinoLogoUrl.toHaveUrl('https://gamblizard.com/casinos/highbet-casino-bonus/');
    });

    it('Test 25: Work Deals of the day tab',  async () => {
        const DealsOfTheDay = await browser.$('.best-deals__header > li:nth-child(1)');
        await DealsOfTheDay.click();
        const NewOffers = await browser.$('.best-deals__header > li:nth-child(2)');
        await NewOffers.click();
        const ExclusiveOffers = await browser.$('.best-deals__header > li:nth-child(3)');
        await ExclusiveOffers.click();
    });

    it('Test 26: Redirect Get Bonus button for Best Casino Offers top block',  async () => {
        const GetBonusBtn = await browser.$('div.best-deals__block.tab-content-js.active > div:nth-child(4)');
        await GetBonusBtn.click();
    });

    it('Test 27: Works T&Cs Apply buttons on in tne Best Casino Offers block',  async () => {
        const TCsApplyexpand = await browser.$('div.card__tandc > div > div > p > button');
        await TCsApplyexpand.click();
        const TCsApplycollapse = await browser.$('div.card__tandc > div > div > p > button');
        await TCsApplycollapse.click();
    });

    it('Test 28: Displayed What our partners say block',  async () => {
        const partners = await browser.$('.partners-say__slider-js');
        await expect(partners).toBeDisplayed();
    });

    it('Test 29: h2 Our Team Recommends block',  async () => {
        const TeamRecommendsH2 = await browser.$('body > main > section.recomended-casino > div > h2');
        await expect(TeamRecommendsH2).toHaveText('Our Team Recommends');
    });

    it('Test 30: Our Team Recommends block', async () => {
        const RecomendedCasinoTop = await browser.$('body > main > section.recomended-casino > div > div > div.recomended-casino__top > div > div > a');
        const RecomendedCasinoTopUrl = await RecomendedCasinoTop.getAttribute('href');
        assert.strictEqual(RecomendedCasinoTopUrl, 'https://gamblizard.com/casinos/21-casino-bonus/');
        const RecomendedCasino = await browser.$('body > main > section.recomended-casino > div > div > div.recomended-casino__bottom > div:nth-child(1) > div > a');
        const RecomendedCasinoUrl = await RecomendedCasino.getAttribute('href');
        assert.strictEqual(RecomendedCasinoUrl, 'https://gamblizard.com/casinos/bet-uk-casino-bonus/');
    });

    it('Test 31: Works casino logo for Our Team Recommends block',  async () => {
        const RecomendedCasinoTop = await browser.$('div.recomended-casino__top > div > div > a');
        await RecomendedCasinoTop.click();
        const RecomendedCasinoTopUrl = await expect(browser);
        await RecomendedCasinoTopUrl.toHaveUrl('https://gamblizard.com/casinos/21-casino-bonus/');
    });

    it('Test 32: Our Team Recommends click on casino',  async () => {
        const TeamRecommendsCasino = await browser.$('div.recomended-casino__bottom > div:nth-child(4) > div > a');
        await TeamRecommendsCasino.click();
        const TeamRecommendsCasinoUrl = await expect(browser);
        await TeamRecommendsCasinoUrl.toHaveUrl('https://gamblizard.com/casinos/gopro-casino-bonus/');
    });

    it('Test 33: Find Your Perfect Bonus',  async () => {
        const PerfectBonus = await browser.$('.find-bonus__section');
        await expect(PerfectBonus).toBeDisplayed();
    });

    it('Test 34: Title for Find Your Perfect Bonus block',  async () => {
        const  TitlePerfectBonus = await browser.$('div.find-bonus__search.find-bonus__search-js > p');
        await expect(TitlePerfectBonus).toHaveText('Find Your Perfect Bonus');
    });

    it('Test 35: Check Find Your Perfect Bonus block',  async () => {
        const Selectgame = await browser.$('div > div.find-bonus__search.find-bonus__search-js > form > div:nth-child(3) > div');
        await Selectgame.click();
        const SelectgameRoulette = await browser.$('form > div:nth-child(3) > div > ul > li:nth-child(2)');
        await SelectgameRoulette.click();
        //const radioButton = await $$(".find-bonus-device-js")
        //const userDropdown = radioButton[1]
        //await userDropdown.click()
        const Typeofbonus = await browser.$('div.find-bonus__search.find-bonus__search-js > form > div:nth-child(5) > div');
        await Typeofbonus.click();
        const TypeoNo1stDeposit = await browser.$('form > div:nth-child(5) > div > ul > li:nth-child(2)');
        await TypeoNo1stDeposit.click();
        const FindBonusBtn = await browser.$('div.find-bonus__search.find-bonus__search-js > form > button');
        await FindBonusBtn.click();
        await browser.pause(3000);
    });

    it('Test 36: Check Find Your Perfect Bonus and click on logo',  async () => {
        const SelectGame = await $('div > div.find-bonus__search.find-bonus__search-js > form > div:nth-child(3) > div');
        await SelectGame.click();
        const SelectGameSlot = await $('form > div:nth-child(3) > div > ul > li:nth-child(1)');
        await SelectGameSlot.click();
        const TypeofBonus = await $('div.find-bonus__search.find-bonus__search-js > form > div:nth-child(5) > div');
        await TypeofBonus.click();
        const TypeoNoDeposit = await $('form > div:nth-child(5) > div > ul > li:nth-child(1)');
        await TypeoNoDeposit.click();
        const FindbonusBtn = await $('div.find-bonus__search.find-bonus__search-js > form > button');
        await FindbonusBtn.click();
        await browser.pause(3000);
        const FindbonusBtnLogo = await $('div.find-bonus__result-card.find-bonus__result-card-js.find-card.coupon-modal-js.has_coupon_code.active > div.find-card__logo > a');
        await FindbonusBtnLogo.click();
    });

    it('Test 37: Check empty Find Your Perfect Bonus',  async () => {
        const SelectGames = await $('div > div.find-bonus__search.find-bonus__search-js > form > div:nth-child(3) > div');
        await SelectGames.click();
        const SelectGameBlackjack = await $('form > div:nth-child(3) > div > ul > li:nth-child(3)');
        await SelectGameBlackjack.click();
        const DeviceDesktop = await $('div.find-bonus__search.find-bonus__search-js > form > div:nth-child(4) > div > span:nth-child(2)');
        await DeviceDesktop.click();
        const TypeofBonuss = await $('div.find-bonus__search.find-bonus__search-js > form > div:nth-child(5) > div');
        await TypeofBonuss.click();
        const TypeoNoWagering = await $('form > div:nth-child(5) > div > ul > li:nth-child(3)');
        await TypeoNoWagering.click();
        const FindbonusBtn1 = await $('div.find-bonus__search.find-bonus__search-js > form > button');
        await FindbonusBtn1.click();
        await browser.pause(3000);
    });

    it('Test 38: h2 Top Casino Bonuses block',  async () => {
        const TopBonusesH2 = await browser.$('body > main > section.bonuses > div > div > div.bonuses__left.bonuses-slide-js > h2');
        await expect(TopBonusesH2).toHaveText('Top Casino Bonuses');
    });

    it('Test 39: Top Casino Bonuses block click on casino logo', async () => {
        const BonusesCasinoLogo = await browser.$('body > main > section.bonuses > div > div > div.bonuses__right > div > div > div.bonuses__block.tab-content-js.active > div:nth-child(1) > div.coupon__logo > a');
        await BonusesCasinoLogo.click();
        const BonusesCasinoLogoUrl = await expect(browser);
        await BonusesCasinoLogoUrl.toHaveUrl('https://gamblizard.com/casinos/bluefox-casino-bonus/');
    });

    it('Test 40: Top Casino Bonuses block click on coupon title', async () => {
        const BonusesCouponTitle = await browser.$('body > main > section.bonuses > div > div > div.bonuses__right > div > div > div.bonuses__block.tab-content-js.active > div:nth-child(1) > div.coupon__content > a');
        await BonusesCouponTitle.click();
        //await browser.newWindow('https://ref.gamblizard.com/25p66X')
        //await expect(browser).toHaveUrlContaining('https://ref.gamblizard.com/');
    });

    it('Test 41: Redirect Get Bonus button for Top Casino Bonuses block',  async () => {
        const GetBonusBtn = await browser.$('div.bonuses__block.tab-content-js.active > div:nth-child(1)');
        await GetBonusBtn.click();
    });

    it('Test 42: Work Top Casino Bonuses tabs',  async () => {
        const Highest = await browser.$('div.bonuses__right > div > ul > li:nth-child(1)');
        await Highest.click();
        const FreeSpins = await browser.$('div.bonuses__right > div > ul > li:nth-child(2)');
        await FreeSpins.click();
        const NoDeposit = await browser.$('div.bonuses__right > div > ul > li:nth-child(3)');
        await NoDeposit.click();
        const Deposit = await browser.$('div.bonuses__right > div > ul > li:nth-child(4)');
        await Deposit.click();
    });

    it('Test 43: Team Of Experts block',  async () => {
        const experts = await browser.$('.experts');
        await expect(experts).toBeDisplayed();
    });

    it('Test 44: Team Of Experts block click on More about us button', async () => {
        const MoreAboutBtn = await browser.$('body > main > section.experts > div > div > a');
        await expect(MoreAboutBtn).toHaveText('More about us');
        await MoreAboutBtn.click();
        const MoreAboutBtnUrl = await expect(browser);
        await MoreAboutBtnUrl.toHaveUrl('https://gamblizard.com/about-us/#Team');
    });

    it('Test 45: Displayed Subscribe block',  async () => {
        const Subscribe = await browser.$('body > main > section.subscribe');
        await expect(Subscribe).toBeDisplayed();
    });

    it('Test 46: Check Subscribe block', async  () => {
        const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
        await SubscribeDesc.addValue('automationtest@gmail.com');
        const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
        await checkbox.click();
        const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
        await submitBtn.click();
    });

    it('Test 47: Footer column BONUSES', async () => {
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

    it('Test 48: Footer column COMPANY', async () => {
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

    it('Test 49: Footer column PLEASE GAMBLE RESPONSIBLY', async () => {
        const gambleResponsibly = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(3) > div > div.footer__logos-left > p');
        await expect(gambleResponsibly).toHaveText('PLEASE GAMBLE RESPONSIBLY');
        const badgeDMCA = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(3) > div > div.footer__logos-left > a.dmca-badge');
        const badgeDMCAUrl = await badgeDMCA.getAttribute('href');
        assert.strictEqual(badgeDMCAUrl, 'https://www.dmca.com/Protection/Status.aspx?ID=ba447f08-9e63-4ec0-84ea-6fcc1b903e60&refurl=https://gamblizard.com/');
        const gambleaware = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(3) > div > div.footer__logos-left > a.gambleaware');
        const gambleawareUrl = await gambleaware.getAttribute('href');
        assert.strictEqual(gambleawareUrl, 'https://about.gambleaware.org');
        const gamstop = await browser.$('body > footer > div.footer__top > div > div > div:nth-child(3) > div > div.footer__logos-right > a.footer__icon-link.gamstop');
        const gamstopUrl = await gamstop.getAttribute('href');
        assert.strictEqual(gamstopUrl, 'https://www.gamstop.co.uk/');
    });

    it('Test 50: Footer bottom links', async () => {
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

    // it('Test 000: Top Casino Bonuses block click on Get Bonus button', async () => {
    //     const GetBonusbtn = await browser.$('body > main > section.best-deals > div > div > div.best-deals__right > div > div > div.best-deals__block.tab-content-js.active > div:nth-child(2) > div.coupon__content > div.coupon__button > a');
    //     await GetBonusbtn.click()
    //     .then( async () => {
    //         // await browser.switchWindow('https://gamblizard.com/redirect');
    //         // CTA url at redirected page
    //         // let getCtaUrl = await browser.getUrl();
    //         // console.log('Url Length', getCtaUrl.length);
    //         // assert(getCtaUrl.length >= 105 && getCtaUrl.length <= 115);
    //         await expect(browser).toHaveUrlContaining('https://ref.gamblizard.com/')
    //     });
    // });
});