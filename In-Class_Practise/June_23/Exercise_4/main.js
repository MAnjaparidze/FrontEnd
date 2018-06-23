function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let userF = makeUser();
console.log(userF.ref.name);