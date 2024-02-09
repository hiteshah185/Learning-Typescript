
const express = require('express');
const app = express();

app.get('/users', (request, response) => {
    response.json([
        { id: 54611, username: 'Alan' },
        { id: 89411, username: 'Lavanya' },
        { id: 3992, username: 'Sooraj' }
    ]);
});
app.listen(3000, () => { });


