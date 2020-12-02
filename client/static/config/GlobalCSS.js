import component from '../core/Component.js';

const style =`
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        outline: none;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    .coba {
        color: blue;
    }
`

const GlobalCSS = () => component({
    style,
})
``

export default GlobalCSS;