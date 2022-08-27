import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get labelResults () {
        return $("//*[@id='s0-16-18-5-5[0]']/div[4]");
    }

    public get closeInfoBar(){
        return $("//android.widget.ImageButton[@content-desc='Close']")
    }
    
    public async clickCloseinfoBar(){
        await this.closeInfoBar.click();
    }
}

export default new SearchPage();
