const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

scrape = async (req, res) => {
    try {
        const url = 'https://www.google.com';
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Scraping logic 

        // Puppeteer

        (async () => {
            const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome' });
            const page = await browser.newPage();

            try {
                // Navigate to the Google homepage
                await page.goto('http://www.google.com/', { waitUntil: 'domcontentloaded' });

                // Get the title of the page
                const pageTitle = await page.title();
                const links = await page.evaluate(() => {
                    const anchors = Array.from(document.querySelectorAll('a'));
                    return anchors.map(anchor => anchor.href);
                });

                res.send(links);
                console.log('Links:', links);

                console.log('Title:', pageTitle);

                // If the selector is found, it means the website was accessed successfully
                console.log('Website accessed successfully');
            } catch (error) {
                // If there's an error or the selector is not found, log an error message
                console.error('Error accessing website:', error);
            } finally {
                // Close the browser
                await browser.close();
            }
        })();

        // using cheerio

        // (async () => {
        //     const url = 'http://127.0.0.1:5500/index.html';
        //     const response = await axios.get(url);
        //     const $ = cheerio.load(response.data);
        //     console.log('Scraped data:', $.root());
        //     // res.json({ data: 'Scraped data' }); // Send scraped data as response
        // })();

    } catch (error) {
        console.error('Error scraping website:', error);
        res.status(500).json({ error: 'Failed to scrape website' });
    }
};


module.exports.scrape = scrape;