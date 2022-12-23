
describe('Gamblizard search', () => {
    // beforeEach( async function  () {
    //     await browser.url('https://gamblizard.com/')
    //     await browser.setWindowSize(1552, 840)
    // });

    it('Test 1: Check Search casino', async () =>  {
        await browser.url('https://gamblizard.com/')
        await $(".search-form__input-js").setValue("casino")
        await browser.pause(3000)
        const Search = await $$("div.search-form__result-wrap.tab-block-js > div > div > a")
        await expect(Search).toBeElementsArrayOfSize({eq:155})
        console.log(await Search[0].getText())
        await expect(await Search[0]).toHaveTextContaining("10bet Casino")
        await $("=10bet Casino").click()
        await expect(browser).toHaveUrlContaining("casinos/10bet-casino-bonus")
    });

    it('Test 2: Check Search coupon', async () =>  {
        await browser.url('https://gamblizard.com/')
        await $(".search-form__input-js").setValue("coupon")
        await browser.pause(3000)
        const Search = await $$("div.search-form__result-wrap.tab-block-js > div > div > a")
        await expect(Search).toBeElementsArrayOfSize({eq:6})
        console.log(await Search[0].getText())
        await expect(await Search[0]).toHaveTextContaining("Sign Up Offer for You - Deposit £5 Receive £25 Bingo Bonus with Coupon Code")
        await $("=Sign Up Offer for You - Deposit £5 Receive £25 Bingo Bonus with Coupon Code").click()
        await expect(browser).toHaveUrlContaining("casinos/kitty-bingo-bonus")
    });

    it('Test 3: Empty results Search', async () =>  {
        await browser.url('https://gamblizard.com/')
        await $(".search-form__input-js").setValue("testxbfb")
        await browser.pause(3000)
        const searchEmptyResult = await browser.$(".search-form__empty")
        await expect(searchEmptyResult).toBeDisplayed()
        await expect(searchEmptyResult).toHaveTextContaining("No results")
    });

    it('Test 4: Check Search casino in header', async () =>  {
        await browser.url("https://gamblizard.com/no-deposit-bonuses/")
        await $(".search-form__input-js").setValue("casino")
        await browser.pause(3000)
        const Search = await $$("div.search-form__result-wrap.tab-block-js > div > div > a")
        await expect(Search).toBeElementsArrayOfSize({eq:155})
        console.log(await Search[0].getText())
        await expect(await Search[0]).toHaveTextContaining("10bet Casino")
        await $("=10bet Casino").click()
        await expect(browser).toHaveUrlContaining("casinos/10bet-casino-bonus")
    });

    it('Test 5: Check Search coupon in header', async () =>  {
        await browser.url("https://gamblizard.com/no-deposit-bonuses/")
        await $(".search-form__input-js").setValue("coupon")
        await browser.pause(3000)
        const Search = await $$("div.search-form__result-wrap.tab-block-js > div > div > a")
        await expect(Search).toBeElementsArrayOfSize({eq:6})
        console.log(await Search[0].getText())
        await expect(await Search[0]).toHaveTextContaining("Sign Up Offer for You - Deposit £5 Receive £25 Bingo Bonus with Coupon Code")
        await $("=Sign Up Offer for You - Deposit £5 Receive £25 Bingo Bonus with Coupon Code").click()
        await expect(browser).toHaveUrlContaining("casinos/kitty-bingo-bonus")
    });

    it('Test 6: Empty results Search in header', async () =>  {
        await browser.url("https://gamblizard.com/no-deposit-bonuses/")
        await $(".search-form__input-js").setValue("testxbfb")
        await browser.pause(3000)
        const searchEmptyResult = await browser.$(".search-form__empty")
        await expect(searchEmptyResult).toBeDisplayed()
        await expect(searchEmptyResult).toHaveTextContaining("No results")
    });
});