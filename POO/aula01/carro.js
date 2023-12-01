class Carro {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
    }

    desligar() {
        this.ligado = false;
    }

    acelerar() {
        if (this.ligado) {
            return "Vrummm!";
        } else {
            return "Você precisa ligar o carro primeiro!";
        }
    }

    frear() {
        if (this.ligado) {
            return "Screeech!";
        } else {
            return "Você precisa ligar o carro primeiro!";
        }
    }

    status() {
        return this.ligado ? "ligado" : "desligado";
    }
}

// Testando os métodos
let carro1 = new Carro("Modelo X", 2023);
console.log(carro1.status());  // desligado
carro1.ligar();
console.log(carro1.status());  // ligado
console.log(carro1.acelerar());  // Vrummm!
console.log(carro1.frear());  // Screeech!
carro1.desligar();
console.log(carro1.status());  // desligado
