const makeCoffee = (isHot) => {
  const coffee = { isHot: isHot, extras: [] }
  if (isHot) {
    coffee.cup = 'Styrofoam'
  } else {
    coffee.cup = 'paper'
    coffee.extras.push('ice')
  }
  return coffee
}
const isHot = "hot"
console.log(makeCoffee())
console.log(makeCoffee(isHot))