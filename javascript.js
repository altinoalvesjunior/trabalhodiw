//lida no localstrorage
var fotos = JSON.parse(localStorage.getItem('fotografia'));
//confere
if (!fotos) {
    fotos = dados.info;
    localStorage.setItem('fotografia', JSON.stringify(fotos))
}
//Caregar tabela no formulario
function preencherTabela() {
    localStorage.setItem('indice', "");
    var tabela = document.getElementById("table");
    var cont = `<tr>
    <th>Código</th>
    <th>Pacote</th>
    <th>Quantidade de fotos</th>
    <th>Duração</th>
    <th>Preço</th>

  </tr>`;

    for (i = 0; i < db.length; i++) {
    cont = cont + `<tr>
        <td>${[fotos].codigo}</td>
        <td>${fotos[i].pacote}</td>
        <td>${fotos[i].qtde}</td>
        <td>${fotos[i].duracao}</td>
        <td>${fotos[i].preco}</td>
        <td class="b"><a><button class="btn btn-warning" onclick="alterar(${i})">Alterar</button></a>         <a><button class="btn btn-danger" onclick="excluir(${i})">Excluir</button></a></td>
        </tr>`;
    }
    tabela.innerHTML = cont;
}


//Adicionar
function chamaRegistro(){
    location = "registrar.html";
    sessionStorage.removeItem('indice');
}

//Salvando informaçoes
function salvando(){
    i = sessionStorage.getItem('indice');
    if(i != "" && i != null && i != undefined){ 
        db[i].nome = document.getElementById('codigo').value;
        db[i].genero = document.getElementById('pacote').value;
        db[i].temporadas = document.getElementById('qtde').value;
        db[i].personagem = document.getElementById('duracao').value;
        db[i].publico = document.getElementById('preco').value;
        db[i].imagem = document.getElementById('output').src;
        localStorage.setItem("fotos", JSON.stringify(db));
    }
    else //SALVAR CRIAÇAO
    {
      var atualizacaoAnime  = {
        codigo : document.getElementById('anime').value,
        pacote : document.getElementById('genero').value,
        qtde : document.getElementById('temporada').value,
        duracao : document.getElementById('persprincipal').value,
        preco : document.getElementById('publico').value,
        envio : document.getElementById('publico').value,
        imagem : document.getElementById('output').src
      }        
      db.push(atualizacaoAnime);
      localStorage.setItem("animes", JSON.stringify(db));
    }    
}