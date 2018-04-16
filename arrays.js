var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'snickers']

function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element ) {
  var array = array
  return array.unshift (element)
}
