const {test} = require('@playwright/test');

test('Browser Context Playwright test', async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();
    await page.goto('https://www.amazon.in/?&tag=googinhydr1-21&ref=nav_ya_signin&adgrpid=171770161190&hvpone=&hvptwo=&hvadid=714840681071&hvpos=&hvnetw=g&hvrand=4489054689313059102&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061997&hvtargid=kwd-3704926535&hydadcr=18657_2389208&mcid=a684625856e53b7aba1406fdfbcd950e&gad_source=1&');
});

test('Page Playwright test', async ({page})=>
{
    await page.goto('https://www.amazon.in/?&tag=googinhydr1-21&ref=nav_ya_signin&adgrpid=171770161190&hvpone=&hvptwo=&hvadid=714840681071&hvpos=&hvnetw=g&hvrand=4489054689313059102&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061997&hvtargid=kwd-3704926535&hydadcr=18657_2389208&mcid=a684625856e53b7aba1406fdfbcd950e&gad_source=1&');
});