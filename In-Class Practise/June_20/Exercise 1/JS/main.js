function chackAge(age, granted, denied) {
    if (age < 18) denied ();
    else granted();
}

let age = prompt('What is your age?', 18);

let grantAccess = () => { alert('Access Granted')}
let denyAccesss = () => { alert('Access Denied')}


chackAge(age, grantAccess, denyAccesss);