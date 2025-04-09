const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log("Using Puppeteer from:", require.resolve('puppeteer'));

  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
  });

  const page = await browser.newPage();

  const funkos = [];

  // Loop through 5 pages
  for (let pageNum = 1; pageNum <= 5; pageNum++) {
    const url = `https://www.popinabox.co.uk/funko?page=${pageNum}`;
    console.log(`Navigating to: ${url}`);

    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Scroll to trigger lazy loading
    await autoScroll(page);

    const pageFunkos = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('div.card.product-card'));

      return items.map(el => {
        const name = el.querySelector('h3.product-title a')?.innerText || 'No title';
        const image = el.querySelector('img')?.src || '';
        const link = el.querySelector('a.card-img-top')?.getAttribute('href') || '';
        return {
          name,
          image,
          link: `https://www.popinabox.co.uk${link}`
        };
      });
    });

    console.log(`Page ${pageNum}: Scraped ${pageFunkos.length} Funkos`);
    funkos.push(...pageFunkos);
  }

  fs.writeFileSync('funkos.json', JSON.stringify(funkos, null, 2));
  console.log(`✅ Done! Scraped ${funkos.length} total Funkos and saved to funkos.json`);

  await browser.close();
})();

// Scroll helper
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let totalHeight = 0;
      const distance = 150;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= document.body.scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 200);
    });
  });
}
