let olhouCelular, chance
olhouCelular = Number(prompt("Olhou o celular: "))
chance = (0.1 / (1 + 500 * olhouCelular)) * 100
alert("Chance de ser aprovado: " + chance.toFixed(2))