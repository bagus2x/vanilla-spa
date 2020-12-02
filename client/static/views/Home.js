import component from '../core/Component.js';
import Header from '../components/Header.js';

const style =`
    .coba {
        color: blue;
    }
`

const Home = () => component({
    style,
    children: [Header]
})
`
    <Header/>
    <h1 class="coba">Home page</h1>
`

export default Home;