const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'client', 'static')))

app.get('/*', (_, res) => {
    res.sendFile(path.resolve('client', 'index.html'));
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))