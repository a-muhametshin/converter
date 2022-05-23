export const arrayifyObject = (arrayLikeObject) => {
  let array = []
  if (arrayLikeObject) {
    Object.values(arrayLikeObject).forEach((value) => {
      array.push(value)
    })
  }
  return array
}
