document.addEventListener('DOMContentLoaded', ()=>{
    //alert('todo cargado')
    //setupLoadingBar()
    document.querySelector('.progress').addEventListener('animationend', () => {
        // loader.classList.add('found-out');
        //alert('animation terminada')
        window.location.href = 'invitacion.html'
    })
})



// window.addEventListener('load', (e) => {
//     setupLoadingBar()
// })

// document.querySelector('.progress').addEventListener('animationend', () => {
//     // loader.classList.add('found-out');
//     //alert('animation terminada')
//     window.location.href = 'main.html'
// })

// const progressBar = document.querySelector('.progress')

// const setupLoadingBar = url => {
//     const clLoadBar = e =>{
//         progressBar.removeEventListener('animationend', clLoadBar)
//         progressBar.classList.remove('.progressl')

//     }
//     progressBar.classList.add('progressl')
//     progressBar.addEventListener('animationend', clLoadBar)
// }
