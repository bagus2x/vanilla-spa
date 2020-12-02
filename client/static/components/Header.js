import component from '../core/Component.js';

const style = `
    .navbar-container {
        width: 100vw;
        height: 80px;
        background: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        background:  rgb(72, 129, 233);
    }
    .navbar-container > * {
        margin: 0 5px;
        color: #fff;
    }
`

const Header = () => component({
    style
})
`
    <div class="navbar-container">
        <a href="/" data-link >Home</a>
        <a href="/blog" data-link >Blog</a>
        <a href="/about" data-link >About</a>
    </div>
`

export default Header;