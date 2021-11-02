function personFactory(name){
    let count = 0
    return{
        count: () => count++,
        name: name,
        type: 'person'
    }
}


console.log(personFactory('tulio'));
console.log(personFactory('joao'));
