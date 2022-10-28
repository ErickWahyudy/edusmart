const scriptURL = 'https://script.google.com/macros/s/AKfycbx7BP4HeVXwpnUAteTqJ0S_T8oxqW6DYsMb0bbTAYj-NBSHDapQQH9ebSpf4RJa9OGSTA/exec'
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    $("#modal-signup").modal("hide");
    $("#confirm").modal("show");
})