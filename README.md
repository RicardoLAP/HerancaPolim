# HerancaPolim

class Forma {
constructor(altura) {
this.altura = altura
}

    calcularArea() {
    console.log("Função 'calcularArea' da classe-mãe foi acessada.")
      // Implemente o cálculo da área aqui e retorne o resultado
    }

    calcularVolume() {
    console.log("Função 'calcularVolume' da classe-mãe foi acessada.")
      // Implemente o cálculo do volume aqui e retorne o resultado
    }

}

class FormaPlana extends Forma {
constructor(altura, tipo, base, comprimento) {
super(altura);
this.\_tipo = tipo.toLowerCase();
this.\_base = base;
this.\_comprimento = comprimento;
}

    get tipo() {
    return this._tipo;
    }

    set tipo(novoTipo) {
    this._tipo = novoTipo.toLowerCase();
    }

    get base() {
    return this._base;
    }

    set base(novaBase) {
    this._base = novaBase;
    }

    get comprimento() {
    return this._comprimento;
    }

    set comprimento(novoComprimento) {
    this._comprimento = novoComprimento;
    }

    calcularArea() {
    if (this._tipo === "retangular") {
        return parseFloat((this._base * this._comprimento).toFixed(2));
    } else if (this._tipo === "triangular") {
        return parseFloat(((this._base * this._comprimento) / 2).toFixed(2));
    } else {
        console.log("Erro: Tipo inválido da forma.");
        return 0;
    }
    }

    calcularVolume() {
    if (this._tipo === "retangular") {
        const areaBase = this.calcularArea();
        return parseFloat((areaBase * this.altura).toFixed(2));
    } else if (this._tipo === "triangular") {
        const areaBase = this.calcularArea();
        return parseFloat(((areaBase * this.altura) / 3).toFixed(2));
    } else {
        console.log("Erro: Tipo inválido da forma.");
        return 0;
    }
    }

}

class FormaCircular extends Forma {
#pi = 3.14;
#raio;

    constructor(raio, altura) {
    super(altura);
    this.#raio = raio;
    }

    get raio() {
    return this.#raio;
    }

    set raio(novoRaio) {
    this.#raio = novoRaio;
    }

    calcularArea() {
      const area = this.#pi * Math.pow(this.#raio, 2);
    return area;
    }

    calcularVolumeCilindro() {
    const areaBase = this.calcularArea();
      const volume = areaBase * this.altura;
    return volume;
    }

    calcularVolumeCone() {
    const areaBase = this.calcularArea();
      const volume = (areaBase * this.altura) / 3;
    return volume;
    }

    calcularVolumeEsfera() {
    const areaBase = this.calcularArea();
      const volume = areaBase * this.#raio * 4 / 3;
    return volume;
    }

}

// Instanciando objeto da classe Forma
const forma = new Forma(5);
console.log(forma.altura); // Saída: 5
forma.calcularArea(); // Saída: Acesso à função da classe-mãe
forma.calcularVolume(); // Saída: Acesso à função da classe-mãe

// Instanciando objeto da classe FormaPlana
const formaPlana = new FormaPlana(10, "Retangular", 4, 6);
console.log(formaPlana.altura); // Saída: 10
console.log(formaPlana.tipo); // Saída: retangular
console.log(formaPlana.base); // Saída: 4
console.log(formaPlana.comprimento); // Saída: 6
console.log(formaPlana.calcularArea()); // Saída: 24
console.log(formaPlana.calcularVolume()); // Saída: 240

// Instanciando objeto da classe FormaCircular
const formaCircular = new FormaCircular(3, 8);
console.log(formaCircular.altura); // Saída: 8
console.log(formaCircular.raio); // Saída: 3
console.log(formaCircular.calcularArea()); // Saída: 28.26
console.log(formaCircular.calcularVolumeCilindro()); // Saída: 226.08
console.log(formaCircular.calcularVolumeCone()); // Saída: 75.36
console.log(formaCircular.calcularVolumeEsfera()); // Saída: 113.04
