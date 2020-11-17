//Referencias
const tabelaLancamentos = document.querySelector('table')
const botaoAdicionar = document.querySelector('button')
const inputData = document.querySelector('input[name=data]')
const inputTitulo = document.querySelector('input[name=titulo]')
const inputCategoria = document.querySelector('input[name=categoria]')
const inputCindicativa = document.querySelector('input[name=cindicativa]')


tabelaLancamentos.addEventListener('dblclick', event => {
    if(event.target.parentNode.tagName != 'TR'){
        alert('Clique dentro do campo para apagar a informação')
        return;
    }
    event.target.parentNode.remove()
})



botaoAdicionar.addEventListener('click', adicionarL => {
    
    const data = inputData.value

    let tr = document.createElement('tr')
    let td = document.createElement('td')

    td.innerText = data
    tr.appendChild(td)
    tabelaLancamentos.appendChild(tr)
    inputData.value = ''
    
    const titulo = inputTitulo.value
    
    td = document.createElement('td')

    td.innerText = titulo
    tr.appendChild(td)
    tabelaLancamentos.appendChild(tr)
    inputTitulo.value = ''
    
    const categoria = inputCategoria.value

    td = document.createElement('td')

    td.innerText = categoria
    tr.appendChild(td)
    tabelaLancamentos.appendChild(tr)
    inputCategoria.value = ''

    
    const cindicativa = inputCindicativa.value

    td = document.createElement('td')    

    td.innerText = cindicativa
    tr.appendChild(td)
    tabelaLancamentos.appendChild(tr)
    inputCindicativa.value = ''

    
})