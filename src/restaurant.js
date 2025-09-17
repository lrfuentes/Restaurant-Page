import "./restaurant.css";
import {home} from "./home-manage.js";
import {menu} from "./menu-manage.js";
import { about } from "./about-manage.js";

const content = document.querySelector('#content');
const btn_home = document.querySelector('#home');
const btn_menu = document.querySelector('#menu');
const btn_about = document.querySelector('#about');

home(content);

btn_home.addEventListener('click', ()=>{
    clearContent();
    home(content);
    btn_home.classList.add('active');
});

btn_menu.addEventListener('click', ()=>{
    clearContent();
    menu(content);
    btn_menu.classList.add('active');
});

btn_about.addEventListener('click', ()=>{
    clearContent();
    about(content);
    btn_about.classList.add('active');
});

function clearContent(){
    content.innerHTML = '';
    btn_home.classList.remove('active');
    btn_menu.classList.remove('active');
    btn_about.classList.remove('active');
}