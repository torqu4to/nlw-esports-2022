import express from 'express';
const app = express();
// localhost:3000/
app.get('/bla', (req, res) => {
    return res.json([
        { id: 1, name: 'bla1' },
        { id: 2, name: 'bla2' },
        { id: 3, name: 'bla3' }
    ]);
});
app.listen(3000);
