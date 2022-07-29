const pessoa = {
    nome: 'mario',
    idade: 5,
    endereco: {
        rua: 'Julio',
        numero: 591
    }
};

const {endereco: {rua: arroz, numero: num}} = pessoa

console.log(arroz, num)