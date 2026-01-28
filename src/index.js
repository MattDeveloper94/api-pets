import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { pets } from './pets.js';
import { randomUUID } from 'crypto';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ROTAS
// Listar todos os pets 
// GET → /pets
app.get("/pets", (req, res) => {
    try {
        res.status(200).send({
            ok: true,
            mensagem: "Pets listados com sucesso!",
            dados: pets
        });
    } catch (error) {
        res.status(500).send({
            ok: false,
            mensagem: error.toString()
        });
    }
});

// Criar novo pet 
//POST → /pets
app.post("/pets", (req, res) => {
    try {
        // entrada
        const { nome, idade, raca, nomeTutor } = req.body;

        // processamento
        const novoPet = {
            id: randomUUID(),
            // como o a propriedade do pet tem o mesmo nome das propriedades do body, 
            // posso passar só a referência sem precisar adicionar o valor a chave → 
            // 'nome : nome' → passa a ser → 'nome'
            nome,
            idade,
            raca,
            nomeTutor
        }

        pets.push(novoPet);

        //saída
        res.status(201).send({
            ok: true,
            mensagem: "Pet criado com sucesso!",
            dados: pets
        });

    } catch (error) {
        res.status(500).send({
            ok: false,
            mensagem: error.toString()
        });
    }
});


// executando API
const porta = process.env.PORT;
app.listen(porta, () => {
    console.log(`O servidor está executando na porta ${porta}.`);
});
