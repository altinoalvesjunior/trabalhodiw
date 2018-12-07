//lida no localstrorage
var dbfotos = JSON.parse(localStorage.getItem('fotografia'));

//confere
if (!dbfotos && dbfotos == null) {
    dbfotos = fotos.resultado;
    localStorage.setItem('fotografia', JSON.stringify(dbfotos))
}
//Caregar tabela no formulario
function preencherTabela() {
    localStorage.setItem('indice', "");
    var tabela = document.getElementById("table");
    var cont = `<tr>
    <th>Pacote</th>
    <th>Quantidade de fotos</th>
    <th>Duração</th>
    <th>Preço</th>
    <th>#</th>
  </tr>`;

    for (i = 0; i < dbfotos.length; i++) {
    cont = cont + `<tr>
        <td>${dbfotos[i].pacote}</td>
        <td>${dbfotos[i].qtde}</td>
        <td>${dbfotos[i].duracao}</td>
        <td>${dbfotos[i].preco}</td>
        <td><a><button class="btn btn-warning" onclick="alterar(${i})">Alterar</button></a>         <a><button class="btn btn-danger" onclick="excluir(${i})">Excluir</button></a>        <button class="btn btn-info" data-toggle="modal" data-target="#ver" onclick="carregaModal(${i})">Visualizar</button></td>
        </tr>`;
    }
    tabela.innerHTML = cont;
}
//ver informacao
function carregaModal(indice){
    document.getElementById('t1').innerHTML = dbfotos[indice].pacote;
    document.getElementById('t2').innerHTML = dbfotos[indice].qtde;
    document.getElementById('t3').innerHTML = dbfotos[indice].envio;
    document.getElementById('t4').innerHTML = dbfotos[indice].duracao;
    document.getElementById('t5').innerHTML = dbfotos[indice].preco;
    document.getElementById('t7').innerHTML = dbfotos[indice].publico;
    document.getElementById('t6').src = dbfotos[indice].imagem;
}

//Adicionar
function chamaRegistro(){
    location = "registrar.html";
    sessionStorage.removeItem('indice');
}

//conta para saber qual a string é pra mexer
function alterar(id) {
    location = "registrar.html";
    sessionStorage.setItem('indice', id);
}

//alterar objetos salvos no json 
function abrir(){
    var i = sessionStorage.getItem('indice'); 
    if(i != "" && i !== null && i != undefined) { 
        document.getElementById('pacote').value = dbfotos[i].pacote;
        document.getElementById('qtde').value = dbfotos[i].qtde;
        document.getElementById('duracao').value = dbfotos[i].duracao;
        document.getElementById('preco').value = dbfotos[i].preco;
        document.getElementById('envio').value = dbfotos[i].envio;
        document.getElementById('local').value = dbfotos[i].publico;
        document.getElementById('output').src = dbfotos[i].imagem;
    }
}

//Salva os dados
function salvar(){
    i = sessionStorage.getItem('indice');
    if(i != "" && i != null && i != undefined){ 
        dbfotos[i].pacote = document.getElementById('pacote').value;
        dbfotos[i].qtde = document.getElementById('qtde').value;
        dbfotos[i].duracao = document.getElementById('duracao').value;
        dbfotos[i].preco = document.getElementById('preco').value;
        dbfotos[i].envio = document.getElementById('envio').value;
        dbfotos[i].publico = document.getElementById('local').value;
        dbfotos[i].imagem = document.getElementById('output').src;
        localStorage.setItem("fotografia", JSON.stringify(dbfotos));
    }
    else //SALVAR CRIAÇAO
    {
      var atualizacaoPortifolio  = {
        pacote : document.getElementById('pacote').value,
        qtde : document.getElementById('qtde').value,
        duracao : document.getElementById('duracao').value,
        preco : document.getElementById('preco').value,
        envio : document.getElementById('envio').value,
        publico : document.getElementById('local').value,
        imagem : document.getElementById('output').src
      }        
      dbfotos.push(atualizacaoPortifolio);
      localStorage.setItem("fotografia", JSON.stringify(dbfotos));
    }    
}

//excluir informaçoes
function excluir(id) {
    dbfotos.splice(id, 1);
    localStorage.setItem('fotografia', JSON.stringify(dbfotos));
    window.location.reload();
}

//Recebe imagem de arquivo externo e salva
var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };

