let produtos = {
    1: { categoria: 'Hortifruti', quantidade: 0 },
    2: { categoria: 'Laticínios', quantidade: 0 },
    3: { categoria: 'Carnes', quantidade: 0 },
    4: { categoria: 'Peixes', quantidade: 0 },
    5: { categoria: 'Aves', quantidade: 0 },
};


let escolha;


do {
    escolha = parseInt(prompt("Escolha a categoria desejada:\n\n(1) Hortifruti\n(2) Laticínios\n(3) Carnes\n(4) Peixes\n(5) Aves\n(6) Fechar pedido"));
    if (escolha >= 1 && escolha <= 5) {
        let quantidade = parseInt(prompt("Digite a quantidade de "+produtos[escolha].categoria+": "));
        produtos[escolha].quantidade += quantidade;
    }
    else if (escolha !== 6) {
        alert('Escolha inválida. Tente novamente.');
    }
} while (escolha !== 6);


let maiorQuantidade = 0;
let produtoMaiorQuantidade = '';

    for (let escolha in produtos) {
        if (produtos[escolha].quantidade > maiorQuantidade) {
        maiorQuantidade = produtos[escolha].quantidade;
        produtoMaiorQuantidade = produtos[escolha].categoria;
    }
}

alert("O produto que o cliente pegou em maior quantidade foi: "+produtoMaiorQuantidade)