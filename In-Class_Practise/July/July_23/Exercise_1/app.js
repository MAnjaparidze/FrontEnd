class Error {
    constructor(message) {
        this.message = message;
        this.name = "Error";
        // this.stack = 
    }
}

class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationError';
    }
}

class PropertyRequiredError extends ValidationError {

    constructor(property) {
        super(`No property: : ${property}`);
        this.name = "PropertyRequiredError";
        this.property = property;
      }

}



function readUser(json) {

    let user = JSON.parse(json);

    if (!user.age) {

        throw new PropertyRequiredError("age");

    }

    if (!user.name) {

        throw new PropertyRequiredError("name");

    }

    return user;

}

try {

    let user = readUser('{ "age": 25 }');

} catch (err) {

    if (err instanceof ValidationError) {

        alert("Invalid data: " + err.message); // Invalid data: No property: name

        alert(err.name); // PropertyRequiredError 

        alert(err.missingProperty); // name 

    } else if (err instanceof SyntaxError) {

        alert("JSON Syntax Error: " + err.message);

    } else {

        throw err; // unknown error, rethrow it 

    }
}