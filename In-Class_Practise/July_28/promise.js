window.onliad = () => {
let usersEndPoint = `https://jsonplaceholder.typicode.com/users`;

fetch(usersEndPoint, {
    method: 'get'
})
    .then((response) => {
        // console.log(response);
        if (response.status === 200) {
            // console.log('Yep');
            return response.json();
        }
    })
    .then(usersList => {
        // console.log(usersList)
        document.body.innerHTML = usersList.map(user => {
            // onclick="showDetailsById(${user.id})"
            return `<div data-user-id="#${user.id}"> 
            <h2>${user.name} <small> Id - ${user.id} </small> </h2>
        </div>`
        }).join('');
        let users = document.querySelectorAll('[data-user-id]');
        users.forEach(user => {
            user.addEventListener('click', (event) => {
                // console.log(`I am an event`, event.target);
                let userDiv = event.target;
                // console.log("Parent node - ", event.target);
                // DIV
                if (userDiv.tagName.toLowerCase() != 'div') {
                    while (userDiv.tagName.toLowerCase() != 'div') {
                        userDiv = userDiv.parentNode;

                    }
                }

                // DIV Element[data-user-id]
                // console.log(userDiv.dataset);
                let userId = user.dataset.userId;
                showDetailsById(userId);
            }, false);
        });
    })
    .catch((error) => {
        console.log(`Error - ${error.message}`);
    })
}

// let objArray = [
//     {id : 1, name: 'test 1'},
//     {id : 2, name: 'test 2'},
//     {id : 3, name: 'test 3'},
// ]

// console.log(typeof JSON.stringify(objArray));

// let response = JSON.parse(newArray);
// console.log(response);
