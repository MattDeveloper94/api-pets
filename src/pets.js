import { randomUUID } from 'crypto';

export const pets = [
    {
        id: randomUUID(),
        nome: "Daphne",
        raca: "Vira-lata",
        idade: 4,
        nomeTutor: "Jose"
    },
    {
        id: randomUUID(),
        nome: "Bob",
        raca: "Golden",
        idade: 6,
        nomeTutor: "Maria"
    }
];