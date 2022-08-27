import { createTypeReferenceDirectiveResolutionCache } from "typescript"

export default class Page {

    //Abre navegador y se reedirije a ebay
    public open () {
        return browser.url(`https://ebay.com/`)
    }
}
