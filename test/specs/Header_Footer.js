const assert = require('assert');



describe('Gamblizard For Header and Footer', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/');
        await browser.setWindowSize(1552, 840);
    });

    it('Test 1: Check Main menu (No Deposit Bonuses)', async () => {
        await $("div:nth-child(3) > ul:nth-child(1) > li:nth-child(1)").click()
        await $("=No Wagering Bonuses").click()
        await expect(browser).toHaveUrlContaining("no-deposit-bonuses/no-wagering")
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("No Wager No Deposit Bonus Offers")
    });

    it('Test 2: Check Main menu (Free Spins)', async () => {
        await $("div:nth-child(3) > ul:nth-child(1) > li:nth-child(2)").click()
        await $("=10 Free Spins").click()
        await expect(browser).toHaveUrlContaining("free-spins/10-free-spins-no-deposit")
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("10 Free Spins No Deposit Required Casinos In 2022")
    });

    it('Test 3: Check Main menu (Deposit Bonuses)', async () => {
        await $("div:nth-child(3) > ul:nth-child(1) > li:nth-child(3)").click()
        await $("=Casino Welcome Bonuses").click()
        await expect(browser).toHaveUrlContaining("deposit-bonuses/casino-welcome-bonus")
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("Top UK Casino Welcome Bonuses on 1st Deposit")
    });

    it('Test 4: Check Main menu (Free Bets)', async () => {
        await $("div:nth-child(3) > ul:nth-child(1) > li:nth-child(4)").click()
        await $("=Bet £5 get Free Bets").click()
        await expect(browser).toHaveUrlContaining("free-bets/bet-5-get-free-bets")
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("Bet £5 get 5, 10, 20, 40 Pounds Free Bets in Top Bookies and Online Casinos in the UK")
    });

    it('Test 5: Check Main menu (Best Casinos)', async () => {
        await $("div:nth-child(3) > ul:nth-child(1) > li:nth-child(5)").click()
        await $("=Trustly Casinos").click()
        await expect(browser).toHaveUrlContaining("best-uk-online-casinos/casino-payment-options/trustly-casinos")
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("Best UK Casinos That Accept Trustly Pay n Play in 2022")
    });

    it('Test 6: Check Main menu (Slots)', async () => {
        await $("div:nth-child(3) > ul:nth-child(1) > li:nth-child(6)").click()
        await $("=Starburst").click()
        await expect(browser).toHaveUrlContaining("slots/starburst-free-spins")
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("Starburst Free Spins No Deposit")
    });

    it('Test 7: Check Main menu (No Deposit Bonuses)', async () => {
        await $("div:nth-child(3) > ul:nth-child(1) > li:nth-child(1)").click()
        await $("=No Wagering Bonuses").click()
        await expect(browser).toHaveUrlContaining("no-deposit-bonuses/no-wagering")
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("No Wager No Deposit Bonus Offers")
    });

    it('Test 8: Footer column BONUSES and title', async () => {
        await $(".footer__top").scrollIntoView()
        console.log(await $("div:nth-child(1) > nav > div > div > p").getText())
        await expect($("div:nth-child(1) > nav > div > div > p")).toHaveText("BONUSES")
        await browser.$("div:nth-child(1) >nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)").click()
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("Free Spins On Registration No Deposit in UK")
    });

    it('Test 9: Footer column COMPANY and title', async () => {
        await $(".footer__top").scrollIntoView()
        console.log(await $("div:nth-child(2) > nav > div > div > p").getText())
        await browser.$("a[href='/about-us/']").click()
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("About Gamblizard")
    });

    it('Test 10: Check wpml menu de and title', async () => {
        await $(".lang-switcher__wrap").scrollIntoView()
        const wpml = await $$(".menu-item-lang")
        const userDropdown = wpml[2]
        await userDropdown.click()
        //const handles = await browser.getWindowHandles()
        //await browser.switchToWindow(handles[0])
        console.log(await $("h1").getText())
    });

    it('Test 11: Check footer logos and title', async () => {
        await $(".lang-switcher__wrap").scrollIntoView()
        await $(".footer__icon-link.gamstop").click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        console.log(await $("h1").getText())
        console.log(await browser.getTitle())
        await browser.closeWindow()
        await browser.switchToWindow(handles[1])
        console.log(await browser.getTitle())
    });
});