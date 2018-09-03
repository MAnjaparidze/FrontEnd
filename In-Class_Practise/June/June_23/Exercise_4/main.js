function makeUser() {
    return {
        name: "John",
        ref: function() {
            return this;
        }
    };
};

let userF = makeUser();
console.log(userF.ref().ref().ref());