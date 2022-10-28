const scriptURL = 'https://script.google.com/macros/s/AKfycby_6O8aYBBYnZeLw1w6b5GA0NGZ82j2f-4XCmTuPLZP5eLtY3j_pWLwud9tOxP9HSgLNQ/exec'
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    $("#modal-signup").modal("hide");
    $("#confirm").modal("show");
})