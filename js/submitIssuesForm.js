function submitIssuesForm(formId) {
    const script = 'https://script.google.com/macros/s/AKfycbxvHYyLBn7YWkZqXutcOkOhrgEbv_xn8YbW-3Nbwo5AK_vpQXM/exec'
    const form = document.forms[formId];

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(script, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    })
}

function changeColor(id) {

    document.getElementById(id).style.background = "grey";
    document.getElementById(id).innerHTML = "SENT";
}