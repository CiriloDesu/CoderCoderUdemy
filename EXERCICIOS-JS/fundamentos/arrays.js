const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')// adiciona valores ao array
console.log(valores)

console.log(valores.pop())//pop remove o último valor do array
console.log(valores)
delete valores[0] //remove um valor específico do array
console.log(valores)

console.log(typeof valores)

