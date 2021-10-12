// setInterval(function() {
//     console.log("Hello!")
// }, 1000);

// setTimeout(function(){
//     console.log("Hey!")
// }, 1000);

//Callback function can be named or annonymous

function greeting(name) {
    console.log(`Hello ${name}, welcome!`);
}

function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;

    callback(fullName)
}

introduction('Isaac', 'Busee', greeting)