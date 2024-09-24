import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:'localhost',
    database:process.env.DB_NAME,
    port:5433
});


export const connectTOOb = async () => {
    try {
        await pool.connect();
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database', error);
        process.exit(1);
    }
};