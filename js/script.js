'use strict';
document.addEventListener('DOMContentLoaded', () => {
        const spinner = document.querySelector('.spinner');
        const spinnerButton = document.querySelectorAll('.spinner-line');
        const spinerMenu = document.querySelector('.burger__menu');
        const overlay = document.querySelector('.overlay');
        const btn = document.querySelector(".btn")
        const burgerMenuBG = document.querySelector('.burger__menu--bg');
            const overflowHidden = () => {
                if (document.body.style.overflow === '') {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                } 
            };
            const spinnerClassToggle = () => {
                spinerMenu.classList.toggle("modal-show");
                spinnerButton.forEach(elem => {
                elem.classList.toggle("active")  
                });    
            };
        spinner.addEventListener('click', (event) => {
            event.preventDefault();
            burgerMenuBG.classList.toggle("modal-show");
            spinnerClassToggle();
            overflowHidden ();
         });
        burgerMenuBG.addEventListener('click', (event) => {
            event.preventDefault();
            burgerMenuBG.classList.toggle("modal-show");
            spinnerClassToggle(); 
            overflowHidden ();
         });  
});