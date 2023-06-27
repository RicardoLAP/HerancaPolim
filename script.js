class Forma {
    #altura

    constructor(altura) {
    this.altura = altura
    }

    get altura() {
    return this.#altura
    }

    set altura(novaAltura) {
    if (typeof novaAltura === 'number' && !isNaN(novaAltura)) {
        this.#altura = novaAltura
    } else {
        console.log("Erro: Altura deve ser um valor numérico.")
    }
    }

    calcularArea() {
    console.log("Acesso à função da classe-mãe")
    }

    calcularVolume() {
    console.log("Acesso à função da classe-mãe")
    }
}

class FormaPlana extends Forma {
    #tipo
    #base
    #comprimento

    constructor(altura, tipo, base, comprimento) {
    super(altura)
    this.tipo = tipo
    this.base = base
    this.comprimento = comprimento;
    }

    get tipo() {
    return this.#tipo
    }

    set tipo(novoTipo) {
    this.#tipo = novoTipo.toLowerCase()
    }

    get base() {
    return this.#base
    }

    set base(novaBase) {
    if (typeof novaBase === 'number' && !isNaN(novaBase)) {
        this.#base = novaBase
    } else {
        console.log("Erro: Base deve ser um valor numérico.")
    }
    }

    get comprimento() {
    return this.#comprimento
    }

    set comprimento(novoComprimento) {
    if (typeof novoComprimento === 'number' && !isNaN(novoComprimento)) {
        this.#comprimento = novoComprimento
    } else {
        console.log("Erro: Comprimento deve ser um valor numérico.")
    }
    }

    calcularArea() {
    if (this.tipo === "retangular") {
        return parseFloat((this.base * this.comprimento).toFixed(2))
    } else if (this.tipo === "triangular") {
        return parseFloat(((this.base * this.comprimento) / 2).toFixed(2))
    } else {
        console.log("Erro: Tipo inválido da forma.")
        return 0
    }
    }

    calcularVolume() {
    if (this.tipo === "retangular") {
        const areaBase = this.calcularArea()
        return parseFloat((areaBase * this.altura).toFixed(2))
    } else if (this.tipo === "triangular") {
        const areaBase = this.calcularArea()
        return parseFloat(((areaBase * this.altura) / 3).toFixed(2))
    } else {
        console.log("Erro: Tipo inválido da forma.")
        return 0
    }
    }
}

class FormaCircular extends Forma {
    static #pi = 3.14
    #raio

    constructor(raio, altura) {
    super(altura)
    this.raio = raio
    }

    get raio() {
    return this.#raio
    }

    set raio(novoRaio) {
    if (typeof novoRaio === 'number' && !isNaN(novoRaio)) {
        this.#raio = novoRaio
    } else {
        console.log("Erro: Raio deve ser um valor numérico.")
    }
    }

    calcularArea() {
      return parseFloat((FormaCircular.#pi * this.raio ** 2).toFixed(2))
    }

    calcularVolumeCilindro() {
    const areaBase = this.calcularArea()
      return parseFloat((areaBase * this.altura).toFixed(2))
    }

    calcularVolumeCone() {
    const areaBase = this.calcularArea()
      return parseFloat(((areaBase * this.altura) / 3).toFixed(2))
    }

    calcularVolumeEsfera() {
    const areaBase = this.calcularArea()
      return parseFloat((areaBase * this.raio * 1.33).toFixed(2))
    }
}

  // Teste das classes

  // Instanciando objetos e executando métodos
const forma = new Forma(5)
console.log("Altura da forma:", forma.altura)
forma.calcularArea()
forma.calcularVolume()

const formaPlana = new FormaPlana(3, "retangular", 4, 6)
console.log("Altura da forma plana:", formaPlana.altura)
console.log("Tipo da forma plana:", formaPlana.tipo)
console.log("Base da forma plana:", formaPlana.base)
console.log("Comprimento da forma plana:", formaPlana.comprimento)
console.log("Área da forma plana:", formaPlana.calcularArea())
console.log("Volume da forma plana:", formaPlana.calcularVolume())

const formaCircular = new FormaCircular(2, 4)
console.log("Altura da forma circular:", formaCircular.altura)
console.log("Raio da forma circular:", formaCircular.raio)
console.log("Área da forma circular:", formaCircular.calcularArea())
console.log("Volume do cilindro:", formaCircular.calcularVolumeCilindro())
console.log("Volume do cone:", formaCircular.calcularVolumeCone())
console.log("Volume da esfera:", formaCircular.calcularVolumeEsfera())
