const botao = document.getElementById("bnt")
const paragrafo = document.getElementById("texto")
const titulo = document.getElementById("titulo")

botao.addEventListener('click', () => {
    pegarIdEmensagem()
})

async function pegarIdEmensagem() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json = await resposta.json()

    const id = `Advice #${json.slip.id}`;
    const mensagem = ` "${json.slip.advice}" `
    paragrafo.innerHTML = mensagem
    titulo.innerHTML =  id

}
pegarIdEmensagem()

