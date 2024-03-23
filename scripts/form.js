const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const feed = document.querySelector("#feedback");

pass2.addEventListener('focusout', validate);

function validate() {
    if(pass1.value !== pass2.value){
        pass1.value="";
        pass2.value="";
        pass1.focus();
        feed.textContent="Passwords do not match.";
    }
    else{
        feed.textContent="";
    };
};

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}