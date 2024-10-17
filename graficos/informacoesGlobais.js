const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'


async function visualizarInformacoesGlobais() {

        const res = await fetch(url)
        const dados = await res.json()
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span>
         estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span>
         horas conectadas.`
        console.log(paragrafo);

        const container = document.getElementById('graficos-container')
  container.appendChild(paragrafo)
     
    }

    visualizarInformacoesGlobais()



