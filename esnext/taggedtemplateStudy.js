let greetings = "Hi"
let name = "TechSmith"
let age = 35

function transform(static, ...tags) {
    console.log('Static', static);
    console.log("tags", tags);
}

transform`${greetings} my name is ${name} and i am ${age}`;