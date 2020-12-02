import Home from '../views/Home.js';
import Blog from '../views/Blog.js';
import About from '../views/About.js';

export default [
    {
        path: '/',
        view: Home
    },
    {
        path: '/blog',
        view: Blog
    },
    {
        path: '/about',
        view: About
    }
];