const scriptURL = 'https://script.google.com/macros/s/AKfycbyFFomL_5agcO9N1kDoKUrrwp0WTy0IFwJySYbasCp9XZmfgD2XLIFF0wJeN6ADjyTtrw/exec'
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    $("#modal-signup").modal("hide");
    $("#confirm").modal("show");
})