class Circulo{
    raio: number;
    
    constructor(raio:number){
       this.raio = raio
    }
    
    calcularDiametro():number{
    return this.raio * 2
    }
    
    calcularCircunferencia(): number{
       return this.raio * 2 * 3.14
    }
    calcularArea(): number {
       return 3.14 * this.raio * this.raio;
    }
    
    }
    
    const circulo = new Circulo(23)
    console.log(circulo.calcularDiametro())
    console.log(circulo.calcularCircunferencia())
    console.log(circulo.calcularArea())
    
    
    
    
    
    
    
    