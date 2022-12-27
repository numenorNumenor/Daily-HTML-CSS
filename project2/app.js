const rating_btns = document.querySelectorAll('.card__rate')
const rating_side = document.querySelector('.card__rating_side')
const rated_side = document.querySelector('.card__rated_side')
const review_score = document.querySelector('.review')
const submit = document.querySelector('.card_rating__submit')
const body = document.querySelector('body')

// loop through each rating score
rating_btns.forEach(button => {
    // and listen for click event
    button.addEventListener('click', (e) => {
        // first remove every element selected class, so there is nothing selected
        rating_btns.forEach(button => {button.classList.remove('card__rate--selected')});
        // then select the one element, user clicks
        e.target.classList.toggle('card__rate--selected')
        // afterwards modify the review score on the next step
        review_score.textContent = button.textContent
    })
});

// Listen for submit
submit.addEventListener('click', (e) => {
    // Prevent default function of submit btn
    e.preventDefault()
    
    // remove active state of rating side
    rating_side.classList.remove('card--active--side')
    // add active state for rated side
    rated_side.classList.add('card--active--side')
})

// listen to whole document
document.addEventListener('click', (e) => {
    // check if body was clicked
    if (e.target == body) {
        // if yes just add active state to rating side
        rating_side.classList.add('card--active--side')
        // remove active state from rated side
        rated_side.classList.remove('card--active--side')
        // remove all selected buttons previously clicked
        rating_btns.forEach(button => {
            button.classList.remove('card__rate--selected')
        });
    }
})
