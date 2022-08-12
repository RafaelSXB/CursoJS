const receitas = [
    {id: 3, nome: 'bolo'},
    {id: 2, nome: 'bolo'},
    {id: 1, nome: 'bolo'},
]

const novaReceita = new Map()
const obReceita = []
for(const nova  of receitas){
    const {id} = nova
    novaReceita.set(id, { ...nova })

}
for(const ob of novaReceita.values()){  
    obReceita.push(ob)

}
console.log(obReceita)