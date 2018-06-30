function submitForm(formId) {
    const script = 'https://script.google.com/macros/s/AKfycbxQt9YEytWxcmxNzRNtFqqAnpZbjnv19OnC-DXB9ILLWSL1bNbb/exec'
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