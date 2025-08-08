import './styles.css';
console.log('JS is Working');
import { loadHomeContent} from './modules/home.js';
import { loadMenuContent } from './modules/menu.js';
import { loadContactContent } from './modules/contact.js';

function clearContent() {
    document.getElementById('content').innerHTML = ``
}

document.getElementById('home-btn').addEventListener('click', () => {
    clearContent();
    loadHomeContent();
});

document.getElementById('menu-btn').addEventListener('click', () => {
    clearContent();
    loadMenuContent();
});

document.getElementById('contact-btn').addEventListener('click', () => {
    clearContent();
    loadContactContent();
});
