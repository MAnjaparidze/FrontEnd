let mainModule = (function(){

    let moduleStorage = window.localStorage;

    let saveBtn     = $('#save');
    let showInfoBtn = $('#showInfo');

    saveBtn.on('click', saveInfo);
    showInfoBtn.on('click', showInfo);

    function saveInfo() {
        let name = $('#name').val();
        let surname = $('#surname').val();
        let age = $('#age').val();

        moduleStorage.setItem('name', name);
        moduleStorage.setItem('surname', surname);
        moduleStorage.setItem('age', age);
    }

    function showInfo() {
        $('#nameInfo').text(`Name: ${moduleStorage.getItem("name")}`);
        $('#surnameInfo').text(`Surname: ${moduleStorage.getItem("surname")}`);
        $('#ageInfo').text(`Age: ${moduleStorage.getItem("age")}`);
    }

})

mainModule();