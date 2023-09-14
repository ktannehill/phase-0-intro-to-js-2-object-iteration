// for(let i = 0; i < array.length; i++) {
//     // loop body
// }

const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

for(const element of myArray) {
    console.log(element)
}

const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: '10004',
};
  
for (const key in address) {
    console.log(key);
    // console.log([key])
    console.log(address[key])
}