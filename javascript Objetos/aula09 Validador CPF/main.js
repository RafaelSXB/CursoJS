function Cpf(cpf) {
    this.cpf = cpf

    this.validaCpf = function () {
        this.cpf = this.cpf.replace(/\D+/g, '')
        if(this.cpf.length !== 11) return 'Digite 11 Digitos do CPF'
        return this.cpfArray()
    }
    this.cpfArray = function () {

        this.cpf = Array.from(this.cpf)
        cpf = Array.from(this.cpf)
        return this.calcD1()

    }
    this.calcD1 = function () {
        this.cpf = this.cpf.slice(0, 9)
        const s1 = this.cpf.reduce((ac, val, i) => ac + Number(val) * (10 - i), 0)
        let d1 = 11 - (s1 % 11)

        if (d1 > 9) d1 = 0
        this.cpf.push(String(d1))
        return this.calcD2()
    }
    this.calcD2 = function () {
        const s2 = this.cpf.reduce((ac, val, i) => ac + Number(val) * (11 - i), 0)
        let d2 = 11 - (s2 % 11)

        if (d2 > 9) d2 = 0
        this.cpf.push(String(d2))
        return this.valida()
    }
    this.valida = function () {
        this.cpf = this.cpf.join()
        cpf = cpf.join()
        if (this.cpf == cpf) {
            return 'CPF Válido'
        } else return 'CPF Invlálido'


    }
}

const thauane = new Cpf('419.906.608-00')
const rafael = new Cpf('503.966.108-89')
console.log(thauane.validaCpf())
console.log(rafael.validaCpf())