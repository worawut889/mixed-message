function generateRandomNumber(max, min) {
  if (max == undefined) {
    max = 5
  }

  if (min == undefined) {
    min = 0
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  return randomNumber
}

const message = {
  animal: ['dog', 'cat', 'duck', 'lion', 'raccon', 'bear', 'snake'],
  plant: ['ficus', 'monstera', 'pothos', 'aloe', 'yucca', 'dracaena'],
}

const sentence = []

for (let word in message) {
  const random = generateRandomNumber(message[word].length)
  switch (word) {
    case 'animal':
      sentence.push(`I have ${random} animal`)
      break
    case 'plant':
      sentence.push(`I have ${random} plant.`)
      break
    default: 
      sentence.push(`There is not enough info.`)
      break
  }
}

function format(param) {
  const formatted = param.join(' and ')
  console.log(formatted)
}

format(sentence)