var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
var comingSoonAnimals = ['panter', 'dragon', 'turtle']
var arr = [4,6,1,0,8,2,45,11,5,33,50,101]
//1
var concat = animals.concat(comingSoonAnimals)
//2
arr.sort(function(a,b){return a-b})
//3
concat.push('cow')
//4
animals.splice(0,1)
//5
concat.indexOf('parrot')

console.log(arr)
console.log(animals)
console.log(concat)
