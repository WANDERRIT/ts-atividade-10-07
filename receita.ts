class Receita{
    nome: string;
    ingredientes: string[];
    instrucoes: string[]
    
    
    constructor(nome: string , ingredientes:string[], instrucoes:string[]){
       this.nome = nome;
       this.ingredientes = ingredientes;
       this.instrucoes = instrucoes;
    
    }
    imprimirReceita():string{
    return  'nome da receita:'+ ' ' + this.nome  + '\n' + 
    'ingredientes: ' + this.ingredientes + '\n' + 'prepararo: ' +  this.instrucoes
    }
    
    
    
    }
    
    const arroz = new Receita('arroz' , ['água', 'arroz', 'sal', 'óleo'],
     ['jogar na panela tudo', 'e misturar'])
     console.log(arroz.imprimirReceita())
    