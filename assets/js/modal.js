const buyBtns = document.querySelectorAll('.js-buy-tickets')
const closeBtn = document.querySelector('.js-modal-close')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')

function showBuyTikectsModal() {
    modal.classList.add('open')
}

function closeBuyTicketsModal(){
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTikectsModal)
}

closeBtn.addEventListener('click', closeBuyTicketsModal)

modal.addEventListener('click', closeBuyTicketsModal)

modalContainer.addEventListener('click', function (event){
    event.stopPropagation()
})