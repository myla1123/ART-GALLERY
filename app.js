const burger=document.querySelector('.header-SVG')
const modal=document.querySelector('.modal-mobile')
const modalButton=document.querySelector('.modal-close-btn')
console.log(modal) 
burger.addEventListener('click',() => {
console.log('hello')
modal.classList.toggle('hidden')

})
modalButton.addEventListener('click',() => {
    console.log('hello')
    modal.classList.toggle('hidden')
    
    })

    // const info="information"
    // console.log(info)