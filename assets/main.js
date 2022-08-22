const firstContainer = document.getElementById('first');
const thankYouContainer = document.getElementById('thankYou');
const error = document.getElementById('error');
const selectedContainer = document.getElementById('selectedContainer');

const ratingButtons = document.querySelectorAll('.rating');
const submit = document.getElementById('submit');

let selected = "";

ratingButtons.forEach(element => {
    element.addEventListener('click', (e) => {
        ratingButtons.forEach(rm => rm.classList.remove('selected'));
        error.classList.add('d-none')
        selected = element.textContent;
        element.classList.add('selected');
    });
})

submit.addEventListener('click', () => {
    if (selected === "") error.classList.remove('d-none');
    selectedContainer.innerText = `You selected ${selected} out of 5`;
    firstContainer.classList.add('d-none');
    thankYouContainer.classList.remove('d-none');
})