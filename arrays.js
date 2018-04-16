var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'snickers']
function destructivelyAddElementToBeginningOfArray (array, element) {
  return [element ...array]
}
