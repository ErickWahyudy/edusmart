const scriptURL = 'https://script.google.com/macros/s/AKfycbwfASSk2F0zdgmMWMm5Uy4tbsCd-l2SObIIaZ5iDMKIOsa6RZhqu55eWU9knWcFWGN6eA/exec'
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    $("#modal-signup").modal("hide");
    $("#confirm").modal("show");
})