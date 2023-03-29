export default function getArrayItemById(array, id) {
  return array.find(item => item.id === id)
};