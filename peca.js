    class Peca{
        constructor(tipo, posI, posJ, id){
            this._tipo = tipo; //0 para Branca, 1 para Preta
            this._posI = posI;
            this._posJ = posJ;
            this._id = id;
            this._morto = 0;//0 para vivo, 1 para morto
        }

        get morto(){
            return this._morto;
        }

        get tipo(){
            return this._tipo;
        }

        get posI(){
            return this._posI;
        }

        get posJ(){
            return this._posJ;
        }

        get id(){
            return this._id;
        }

        set morto(std){
            this._morto =std;
        }

        set posI(i){
            this._posI = i;
        }

        set posJ(j){
            this._posJ = j;
        }

        mover(tabuleiro, i, j){
        }
    }