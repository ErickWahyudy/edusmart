const scriptURL = 'https://script.google.com/macros/s/AKfycbyMb5xCYQM8lu3v4eeLlNA0kKISBuNsABwAUG2N6uMSzEeMfiPUlcRJL10pPepF4xUb/exec'
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    $("#modal-signup").modal("hide");
    $("#confirm").modal("show");
})