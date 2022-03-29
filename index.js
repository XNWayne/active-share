let shareBtn = document.getElementById('share')

let tooltipEl = document.querySelector('#share-btn .tooltiptext')

shareBtn.addEventListener('click', () => {
    if (tooltipEl.style.visibility === 'hidden'){
        tooltipEl.style.visibility = 'visible'   
    } else {
        tooltipEl.style.visibility = 'hidden' 
    }
})

let mobileShareBtn = document.querySelector('#mobile-share-btn')
let shareSection = document.querySelector('.mobile-share')
let profileSection = document.querySelector('.profile')


mobileShareBtn.addEventListener('click', () => {
    shareSection.style.display = 'flex'
    profileSection.style.display = 'none'
})

document.getElementById('mobile-share-btn-cancel').addEventListener('click', () => {
    shareSection.style.display = 'none'
    profileSection.style.display = 'flex'   
})