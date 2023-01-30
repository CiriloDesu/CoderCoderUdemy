const escola = "Cirilo"


console.log(escola.charAt(0))
console.log(escola.charCodeAt(1))
console.log(escola.indexOf('C'))

console.log(escola.substring(1, 3))
console.log(escola.substring(1))

console.log('Escola '.concat(escola).concat('!'))

console.log(escola.replace(/\w/g, "e"))

console.log('Ciri, Loli, Tato'.split(', '))