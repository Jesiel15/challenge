function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}



function loadProdutos() {

    var saida = '';
    var produtos = [];

    $.getJSON('produtos.json', function (data) {
        produtos = data;

        for (i = 0; i < produtos.length; i++) {
           saida += '<div class="col-sm-2">';
           saida += '<img src="' + produtos[i].imageUrl;
           saida += '</div>';
           saida += '<div class="col-sm-7">';
           saida += '<div class="row">';
           saida += 'Nome do produto';
           saida += '</div>';
           saida += '<div class="row">';
           saida += 'Marca (brand)';
           saida += '</div>';
           saida += '<div class="row">';
           saida += 'Descrição';
           saida += '</div>';
           saida += '</div>';





            // saida += '<div class="row">';
            // saida += '<div class="col-lg-4 band-img">';
            // saida += '<img src="' + produtos[i].name + '" alt="' + produtos[i].brand + '" title="' + produtos[i].imageUrl + '">';
            // saida += '</div>';
            // saida += '</div>';
        }
        document.getElementById('itens').innerHTML = saida;
    });
}

