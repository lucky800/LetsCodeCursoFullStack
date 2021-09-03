//Global scope

this.name = "Diego";
console.log(this);

function sayMyName() {
    //escopo diferente
    
    //local scope
    console.log(this.name);   
}

sayMyName();