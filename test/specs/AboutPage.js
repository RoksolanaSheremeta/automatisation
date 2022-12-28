const assert = require('assert');



describe('Gamblizard For "About us page"', () => {
    beforeEach( async function  () {
        await browser.url('https://gamblizard.com/about-us/');
        await browser.setWindowSize(1552, 840);
    });

    it('Test 1: Check to Have Title', async () => {
        await browser.getTitle();
        await expect(browser).toHaveTitle('About us - GambLizard');
    });

    it('Test 2: Canonical',async () => {
        const canonical = await browser.$("link[rel='canonical']");
        const canonicalUrl = await canonical.getAttribute('href');
        assert.strictEqual(canonicalUrl, 'https://gamblizard.com/about-us/');
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

    it('Test 10: Displayed about firstscreen',  async () => {
        const Aboutfirstscreen = await browser.$('div.about__firstscreen > div > div');
        await expect(Aboutfirstscreen).toBeDisplayed();
    });

    it('Test 11: Displayed about mission list',  async () => {
        const missionlist = await browser.$('div.about__mission > div > div.about__mission-list');
        await expect(missionlist).toBeDisplayed();
    });

    it('Test 12: Displayed Meet Our Team',  async () => {
        const MeetOurTeam = await browser.$('div > div.about__team-author');
        await expect(MeetOurTeam).toBeDisplayed();
    });

    it('Test 13: Displayed Testimonials block',  async () => {
        const Testimonials = await browser.$('#Team > div > div.about__partners');
        await expect(Testimonials).toBeDisplayed();
    });

    it('Test 14: Check logo for Displayed Testimonials block',  async () => {
        const Testimonialslogo = await browser.$('div > div > div:nth-child(1) > ul > li:nth-child(1) > a > img');
        await Testimonialslogo.click();
        await expect(browser).toHaveUrl('https://gamblizard.com/casinos/bonus-boss-bonus/');
        await expect(await browser.$('div > div > div.firstscreen-casino__info > h1')).toHaveText('Bonus Boss Casino Bonuses');
    });
    
    it('Test 15: Displayed Subscribe block',  async () => {
        const Subscribe = await $('body > section.subscribe');
        await expect(Subscribe).toBeDisplayed();
    });

    // it('Test 16: Check Subscribe block', async  () => {
    //     const SubscribeDesc = await $('div.subscribe__left > div > form > div.sign-up__item > input.sign-up__input.wpcf7-form-control.wpcf7-text.wpcf7-email.wpcf7-validates-as-required.wpcf7-validates-as-email');
    //     await SubscribeDesc.addValue('automationtest@gmail.com');
    //     const checkbox = await $('div.subscribe__left > div > form > div.sign-up__checkbox > div > label');
    //     await checkbox.click();
    //     const submitBtn = await $('div.subscribe__left > div > form > div.sign-up__item > button');
    //     await submitBtn.click();
    // });
});