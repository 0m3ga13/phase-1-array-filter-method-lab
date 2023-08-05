// Code your solution here
const findMatching = (array, str) => array.filter(item => item.toUpperCase() == str.toUpperCase())

const fuzzyMatch = (array,str) => array.filter(item => item.startsWith(str))

const matchName = (array,str) => array.filter(item => item.name == str)