import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class HomePage extends Page {
    
    //Caja de texto buscador
    public get inputSearch () {
        return $("//*[@id='kw']");
    }

    //Boton Buscar
    public get buttonSearch () {
        return $("//*[@id='gh-f']/div/button[2]");
    }

    //metodo busqueda
    public async searchProduct (dato: string) {
        await this.inputSearch.setValue(dato);
        await this.buttonSearch.click();
    }
    
}

export default new HomePage();
