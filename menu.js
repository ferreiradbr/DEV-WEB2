let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menuhamburguer')


btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})