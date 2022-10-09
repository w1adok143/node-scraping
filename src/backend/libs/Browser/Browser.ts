import puppeteer from "puppeteer";

export default class Browser {
    public async launch(config: puppeteer.BrowserLaunchArgumentOptions | puppeteer.BrowserConnectOptions = {}) {
        return await puppeteer.launch(config);
    }

    public async close(browser: puppeteer.Browser | puppeteer.Browser[]) {
        if (Array.isArray(browser)) {
            await Promise.all(browser.map(el => el.close()));
        } else {
            await browser.close();
        }
    }

    public async getPage(browser: puppeteer.Browser) {
        return await browser.newPage();
    }
}