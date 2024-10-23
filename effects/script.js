"use strict";

const box = document.querySelector('.box');

box.addEventListener('click', e=>{
    box.classList.toggle('wiggle-effect');
})