class Torre extends Peca{
    constructor(tipo,posI,posJ,id){
        super(tipo, posI, posJ, id);
    }

    trajetoria(tabuleiro, dest, coord, peca){
        var orientacao;
        if(coord == 'X'){
            if(peca.posI - dest > 0) orientacao = 'N';
            else orientacao = 'S';
        }
        else if(coord == 'Y'){
            if(peca.posJ - dest > 0) orientacao = 'O';
            else orientacao = 'L';
        }
        switch(orientacao){
            case 'N':
            for(var y = peca.posI - 1; y > dest; y--){
                if(tabuleiro.getPecaId(y,peca.posJ)) return true;                    
            }
            break;
            case 'S':
                for(var y = peca.posI + 1; y < dest; y++){
                    if(tabuleiro.getPecaId(y,peca.posJ)) return true;                    
                }
            break;
            case 'L':
                for(var x = peca.posJ + 1; x < dest; x++){
                    if(tabuleiro.getPecaId(peca.posI,x)) return true;                    
                }
            break;
            case 'O':
                for(var x = peca.posJ - 1; x > dest; x--){
                    if(tabuleiro.getPecaId(peca.posI,x)) return true;                    
                }
            break;
        }
        return false;
    }

    mover(tabuleiro, i, j){
        //(peca.i == i && peca.j == j)
        // Esse é um comportamento de exemplo.
        // <<<<<<<
        if(tabuleiro.getPeca(i,j) != undefined) if(tabuleiro.getPeca(i,j).tipo == this.tipo) return false;
        if((super.posJ == j && super.posI != i) || (super.posJ != j && super.posI == i)){ //Andar
            if(super.posJ == j && this.trajetoria(tabuleiro,i,'X',this)) return false;
            else{
                if(this.trajetoria(tabuleiro,j,'Y',this)) return false;
            }
            tabuleiro.rmPeca(super.posI,super.posJ);
            super.posI = i;
            super.posJ = j;
            tabuleiro.addPeca(this);
            return true;
        }
        return false;
    }
}