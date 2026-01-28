import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ROTAS


// executando API
const porta = process.env.PORT;
app.listen(porta, () => {
    console.log(`O servidor está executando na porta ${porta}.`);
});
