// const puppeteer = require('puppeteer');
// const fs = require('fs');

// (async () => {
//   console.log("Using Puppeteer from:", require.resolve('puppeteer'));

//   const browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 100,
//   });

//   const page = await browser.newPage();

//   const funkos = [];

//   // Loop through 5 pages
//   for (let pageNum = 1; pageNum <= 5; pageNum++) {
//     const url = `https://www.popinabox.co.uk/funko?page=${pageNum}`;
//     console.log(`Navigating to: ${url}`);

//     await page.goto(url, { waitUntil: 'domcontentloaded' });

//     // Scroll to trigger lazy loading
//     await autoScroll(page);

//     const pageFunkos = await page.evaluate(() => {
//       const items = Array.from(document.querySelectorAll('div.card.product-card'));

//       return items.map(el => {
//         const name = el.querySelector('h3.product-title a')?.innerText || 'No title';
//         const image = el.querySelector('img')?.src || '';
//         const link = el.querySelector('a.card-img-top')?.getAttribute('href') || '';
//         return {
//           name,
//           image,
//           link: `https://www.popinabox.co.uk${link}`
//         };
//       });
//     });

//     console.log(`Page ${pageNum}: Scraped ${pageFunkos.length} Funkos`);
//     funkos.push(...pageFunkos);
//   }

//   fs.writeFileSync('funkos.json', JSON.stringify(funkos, null, 2));
//   console.log(`✅ Done! Scraped ${funkos.length} total Funkos and saved to funkos.json`);

//   await browser.close();
// })();

// // Scroll helper
// async function autoScroll(page) {
//   await page.evaluate(async () => {
//     await new Promise(resolve => {
//       let totalHeight = 0;
//       const distance = 150;
//       const timer = setInterval(() => {
//         window.scrollBy(0, distance);
//         totalHeight += distance;

//         if (totalHeight >= document.body.scrollHeight - window.innerHeight) {
//           clearInterval(timer);
//           resolve();
//         }
//       }, 200);
//     });
//   });
// }

// 




// const puppeteer = require('puppeteer');
// const fs = require('fs');

// (async () => {
//     const browser = await puppeteer.launch({
//         headless: false,
//         slowMo: 100,
//     });

//     const page = await browser.newPage();
//     const funkos = [];

//     for (let pageNum = 1; pageNum <= 6; pageNum++) {
//         const url = `https://www.popfigures.com/collections/star-wars?page=${pageNum}`;
//         console.log(`Navigating to: ${url}`);
//         await page.goto(url, { waitUntil: 'domcontentloaded' });
//         await autoScroll(page);

//         const pageFunkos = await page.evaluate(() => {
//             const items = Array.from(document.querySelectorAll('.product-list--collection .product-item'));
//             return items.map(el => {
//                 const title = el.querySelector('.product-item__title')?.innerText.trim() || 'No title';
//                 const image = el.querySelector('img.product-item__primary-image')?.src || '';
//                 const link = el.querySelector('a')?.href || '';
//                 const price = el.querySelector('.product-item__price-list .price')?.innerText.trim() || 'N/A';
//                 return { title, image, link, price };
//             });
//         });

//         console.log(`Page ${pageNum}: Scraped ${pageFunkos.length} Funkos`);
//         funkos.push(...pageFunkos);
//     }

//     const category = 'star-wars';
//     fs.writeFileSync(`${category}pop.json`, JSON.stringify(funkos, null, 2));
//     console.log(`📁 Saved ${funkos.length} ${category} Funkos to ${category}pop.json`);

//     await browser.close();
// })();

// // Scroll helper
// async function autoScroll(page) {
//     await page.evaluate(async () => {
//         await new Promise(resolve => {
//             let totalHeight = 0;
//             const distance = 150;
//             const timer = setInterval(() => {
//                 window.scrollBy(0, distance);
//                 totalHeight += distance;

//                 if (totalHeight >= document.body.scrollHeight - window.innerHeight) {
//                     clearInterval(timer);
//                     resolve();
//                 }
//             }, 200);
//         });
//     });
// }

// const puppeteer = require('puppeteer');
// const fs = require('fs');

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 100,
//   });

//   const page = await browser.newPage();
//   const funkos = [];

// //   const franchise = 'stranger-things'; 
// //   const maxPages = 5;

//   for (let pageNum = 1; pageNum <= 2; pageNum++) {
//     const url = `https://www.popinabox.co.uk/franchises/stranger-things?pageNumber=${pageNum}`;
//     console.log(`Navigating to: ${url}`);

//     await page.goto(url, { waitUntil: 'domcontentloaded' });
//     await autoScroll(page);

//     const pageFunkos = await page.evaluate(() => {
//       const items = Array.from(document.querySelectorAll('div.card.product-card'));

//       return items.map(el => {
//         const name = el.querySelector('h3.product-title a')?.innerText || 'No title';
//         const image = el.querySelector('img')?.src || '';
//         const link = el.querySelector('a.card-img-top')?.getAttribute('href') || '';
//         return {
//           name,
//           image,
//           link: `https://www.popinabox.co.uk${link}`
//         };
//       });
//     });

//     console.log(`Page ${pageNum}: Scraped ${pageFunkos.length} Funkos`);
//     funkos.push(...pageFunkos);
//   }

// //   const filename = `${franchise.replace(/-/g, '')}pop.json`;
// //   fs.writeFileSync(filename, JSON.stringify(funkos, null, 2));

//   const category = 'stranger-things';
//   fs.writeFileSync(`${category}pop.json`, JSON.stringify(funkos, null, 2));
//   console.log(`✅ Done! Scraped ${funkos.length} total Funkos and saved to ${filename}`);

//   await browser.close();
// })();

// // Scroll helper
// async function autoScroll(page) {
//   await page.evaluate(async () => {
//     await new Promise(resolve => {
//       let totalHeight = 0;
//       const distance = 150;
//       const timer = setInterval(() => {
//         window.scrollBy(0, distance);
//         totalHeight += distance;

//         if (totalHeight >= document.body.scrollHeight - window.innerHeight) {
//           clearInterval(timer);
//           resolve();
//         }
//       }, 200);
//     });
//   });
// }


const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
    });

    const page = await browser.newPage();
    const funkos = [];

    for (let pageNum = 1; pageNum <= 6; pageNum++) {
        const url = `https://www.popfigures.com/search?page=${pageNum}&q=game+of+thrones&type=product`;
        // const url = `https://www.popfigures.com/collections/other=${pageNum}`;
        console.log(`Navigating to: ${url}`);
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        await autoScroll(page);

        const pageFunkos = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('.product-list--collection .product-item'));
            return items.map(el => {
                const title = el.querySelector('.product-item__title')?.innerText.trim() || 'No title';
                const image = el.querySelector('img.product-item__primary-image')?.src || '';
                const link = el.querySelector('a')?.href || '';
                const price = el.querySelector('.product-item__price-list .price')?.innerText.trim() || 'N/A';
                return { title, image, link, price };
            });
        });

        console.log(`Page ${pageNum}: Scraped ${pageFunkos.length} Funkos`);
        funkos.push(...pageFunkos);
    }

    const category = 'gameOfThrones';
    fs.writeFileSync(`${category}pop.json`, JSON.stringify(funkos, null, 2));
    console.log(`📁 Saved ${funkos.length} ${category} Funkos to ${category}pop.json`);

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