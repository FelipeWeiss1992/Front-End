//criei uma variavel chamada elemento 
//document acessa o documento html que esta sendo chamado o script
//query selector e um methodo interno do javaScript que nos retorna um elemento html 
var elemento = document.querySelector('h1')
//variavel recebendo inner html para incremento ou alteracao descrtivo
elemento.innerHTML += ' JS';
//variavel elemento recebendo estilizacao de cor 
elemento.style.color = 'black';
//console log e o nosso print retorno variavel
console.log(elemento);

//criei uma variavel chamada limpar
function limpar(event){
    //preventDefault nao atualiza o reload da pagina
    event.preventDefault();
    //acessando documento html buscando elemento form e resetando formulario
    document.querySelector('form').reset();
    
    //console log limpando
    console.log('Limpando....');
}

function salvar(event){
    event.preventDefault();
    console.log('salvando....');
    
    var name = document.getElementsByName('nome')[0].value;
    var media = document.getElementsByName('media')[0].value;
    var situation = document.getElementsByName('situacao')[0].value;

    var listaAlunos = JSON.parse(localStorage.getItem('Alunos'));
    if(listaAlunos == null){

        listaAlunos = [];

    }
    var id = JSON.parse(localStorage.getItem('IdAluno'));
    if(listaAlunos == null){

        id = 0;
    }

    id = id + 1;

    var Aluno = {
                    'id': id,
                    'nome': name,
                    'media': media,
                    'situacao': situation
                };
                listaAlunos.push(Aluno)
                
    
    localStorage.setItem('IdAluno',JSON.stringify(id));
    localStorage.setItem('Alunos',JSON.stringify(listaAlunos));
    limpar(event);
}

document.getElementById('salvar').addEventListener('click', salvar)