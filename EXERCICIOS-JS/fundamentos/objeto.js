const prod1 = {}
prod1.name = 'Celular ultra mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    name: 'Camisa Polo',
    preço: 79.90,
    obj: {
        blabla:1,
        obj: {
            blabla:2
        }
    }
}
console.log(prod2)