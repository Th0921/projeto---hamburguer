const list = document.querySelector('ul')
const mostrarBotao = document.querySelector('.button-mostrar')
const itemMapeado = document.querySelector('.button-mapear')
const sumarTudo = document.querySelector('.button-somar')
const filtrarTuso = document.querySelector('.button-filtrar')

function formatarMoeda(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newValue
}

function mostrar(productArray) {
    let minhaLista = ''

    productArray.forEach(product => {

        minhaLista = minhaLista + `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="preço-item">${formatarMoeda(product.price)}</p>
                </li>
            
        `
    })

    list.innerHTML = minhaLista
}

function buttonMapDesconto() {
    const newPrice = menuOptions.map((price) => ({
        ...price,//esses 3 pontinhos e o nome do produto são para colocar todod os itens do array original que não serão modificado, serve para economizar código!
        price: price.price * 0.9, //É UMA FORMA DE DAR 10% DE DESCONTO 
    }))

    mostrar(newPrice)
}

function buttonSomarTudo() {
    const valorTotal = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
            <p>A soma dos produtos é ${formatarMoeda(valorTotal)}</p>
        </li>
    
    `
}

function buttonFltrarTudo() {
    const mostrarVeganos = menuOptions.filter((product) => product.vegan)

    mostrar(mostrarVeganos)
}

mostrarBotao.addEventListener('click', () => mostrar(menuOptions))

itemMapeado.addEventListener('click', buttonMapDesconto)

sumarTudo.addEventListener('click', buttonSomarTudo)

filtrarTuso.addEventListener('click', buttonFltrarTudo)




