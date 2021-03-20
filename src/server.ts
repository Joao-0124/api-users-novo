import express from 'express'; // importa framework Express

const app = express() // instancia de Express
const port = 3030 //prta de acesso

app.listen(port, () => {
    console.log(`Servidor rodando em: https://localhost:${port}`) // retorno do status do setor
})
