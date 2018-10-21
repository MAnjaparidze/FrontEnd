const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    let num_1 = document.getElementById('num_1').value;
    let num_2 = document.getElementById('num_2').value;
    let result = document.getElementById('result');
    let url = `/add?num_1=${num_1}&num_2=${num_2}`;
    let loader = document.getElementById('loader');

    showLoader(loader);
    /*
    fetch(url, {
        method: 'GET'
    })
        .then(res => {
            return res.text();
        })
        .then(data => {
            console.log(data)
            result.innerHTML = `Sum is ${data}`;
        })
        .catch(err => {
            console.error(err)
        })
        .finally(() => {
            hideLoader()
        })
    */

    // JQUERY Way

    $.ajax({
        url: '/add',
        method: 'GET',
        data: { num_1, num2 }
    }).done(data => {
        console.log(data);
        result.innerHTML = `Sum is ${data}`;
        hideLoader();
    })
    .always(() => {
        hideLoader(loader);
    });
    $.get("/add", {
        data: {num_1, num_2}
        // function(){

        // }
    })
})

// $.get(), $.post(), $.getScript(), $.getJson()

function showLoader() {
    loader.classList.remove('loader--show')
    loader.classList.add('loader--hide')
}

function hideLoader(loader) {
    loader.classList.add('loader--show')
    loader.classList.remove('loader--hide')
}