# Getting Started with Vanilla SPA

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

### Example

```js
import component from '../core/Component.js';
import Header from '../components/Header.js';

const style =`
    .test {
        color: blue;
    }
`

const Home = () => component({
    style,
    children: [Header]
})
`
    <Header/>
    <h1 class="test">Home page</h1>
`

export default Home;
```

