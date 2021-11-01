export default function orderByProps(obj, fields) {
  let sortByFields = [],
      sortByAlphabet = []


  // отделяем сортируемые и несортируемые по переданным ключам свойства объекта 
  for(const prop in obj) {
    if (fields.includes(prop)) {
      sortByFields.push({
        key: prop,
        value: obj[prop]
      })
    } else {
      sortByAlphabet.push({
        key:prop,
        value: obj[prop]
      })
    }
  }

  let sortedByFields = []
  // сортируем по заданному порядку ключей массива field
  for(const field in fields) {
    let filtered = sortByFields.filter(elem => elem.key === fields[field])
    sortedByFields = sortedByFields.concat(filtered)
  }

  // сортируем остальные свойства по алфавиту
  let sortedByAlphabet = sortByAlphabet.sort((elem1, elem2) => {
    if (elem1.key < elem2.key) {
      return -1
    } else {
      return 1
    }
  })

  // объединяем отсортированные массивы
  return sortByFields.concat(sortedByAlphabet)
}
