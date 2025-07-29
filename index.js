#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';

console.log(
  chalk.magentaBright(
    figlet.textSync('Motiva CLI', { horizontalLayout: 'default' })
  )
);

// Lista de frases motivacionais
const frases = [
  { texto: "A persistência realiza o impossível.", autor: "Provérbio Chinês" },
  { texto: "Você é mais forte do que imagina.", autor: "Anônimo" },
  { texto: "Não desista do que te faz sorrir.", autor: "Desconhecido" },
  { texto: "Comece onde você está. Use o que você tem. Faça o que puder.", autor: "Arthur Ashe" },
  { texto: "Grandes jornadas começam com um simples passo.", autor: "Confúcio" },
  { texto: "O sucesso é a soma de pequenos esforços repetidos todos os dias.", autor: "Robert Collier" },
  { texto: "Você nunca saberá se não tentar.", autor: "Anônimo" },
  { texto: "Acredite no seu potencial.", autor: "Desconhecido" }
];

// Escolhe uma frase aleatória
const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

console.log('\n');
console.log(chalk.greenBright(`"${fraseAleatoria.texto}"`));
console.log(chalk.cyan(`— ${fraseAleatoria.autor}`));
