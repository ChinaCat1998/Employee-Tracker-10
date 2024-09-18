import express from 'express';
import {QueryResult} from 'pg';
import {pool, connectTOOb } from './db/connection.js';

await connectTOOb();

const PORT = process.env.PORT || 3001;
const app= express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());


app.use((_req,res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});