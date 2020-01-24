class ListaNegociacoes {

    constructor(context) {
        this._negociacoes = [];
        this._context = context;
    }

    adiciona(negociacao) {
        //this._negociacoes.push(negociacao);
        
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];  
    }

}