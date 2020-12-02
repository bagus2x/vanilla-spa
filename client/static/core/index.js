import GlobalCSS from '../config/GlobalCSS.js';
import routes from '../config/routes.js';

const render = async () => {
    let match = routes.find((route) => route.path === location.pathname) || routes[0]
    document.getElementById('app').innerHTML = match.view();
    GlobalCSS();
}

const push = (url) => {
    history.pushState(null, null, url);
    render();
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            if (new URL(e.target.href).pathname === location.pathname) return;
            push(e.target.href);
        }
    })
    render();
})