import { Router } from 'express' //importação

const posicaoRouter = Router() // Lógica

const posicao = [] // Array

posicaoRouter.post('/posicão', (req, res) => {
    const {giroscopio, altimetro, velocidade} = req.body

    posicao.push({
        giroscopio,
        altimetro,
        velocidade
    })

    res.status(201).send()
})

export { posicaoRouter } // exportação