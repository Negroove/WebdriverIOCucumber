import { createTypeReferenceDirectiveResolutionCache } from "typescript";
import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

class SearchPage extends Page {
  //Label que contiene los resultados
  public get labelResults() {
    return $("//*[@id='s0-16-18-5-5[0]']/div[4]");
  }

  //Boton Android Nativo -- Consultar
  public get closeInfoBar() {
    return $("//android.widget.ImageButton[@content-desc='Close']");
  }

}

export default new SearchPage();
