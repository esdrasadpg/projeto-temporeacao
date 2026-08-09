document.getElementById('corpo').addEventListener('keydown', clickSpace)

let corpoV = document.getElementById('corpo')
let timer = 0
let podeClicar = false
let textoAguardo = document.getElementById('textoEC')
let jogoAtivo = false

function iniciarRodada() {
    let tempoVerde = Math.round(Math.random() * 4000 + 1000)

    corpoV.style.backgroundColor = '#ff0000'
    podeClicar = false
    jogoAtivo = false
    textoAguardo.innerText = 'ESPERE!'

    setTimeout(() => {
        corpoV.style.backgroundColor = '#04ff00'
        timer = Date.now()
        podeClicar = true
        textoAguardo.innerText = 'CLIQUE ESPAÇO!'
    }, tempoVerde)
}

function clickSpace() {
    if (jogoAtivo) {
        return
    }

    let agora = Date.now()

    if (!podeClicar) {
        textoAguardo.innerText = 'Muito cedo!'
    }
    else {
        let tempo = agora - timer
        textoAguardo.innerText = `${tempo}ms`
        jogoAtivo = true

        corpoV.style.backgroundColor = '#ff0000'
        podeClicar = false

        setTimeout(() => {
            iniciarRodada()
        }, 1000)
    }
}

iniciarRodada()