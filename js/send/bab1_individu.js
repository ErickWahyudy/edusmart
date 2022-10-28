const scriptURL = 'https://script.google.com/macros/s/AKfycbzsxWkIkO623a6XDuoiUJl5csagfDJ8Pc4_e7e3Poft-F-s9okDlEpS1AZOOycUQ7g3VQ/exec'
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    $("#modal-signup").modal("hide");
    $("#confirm").modal("show");
})