function carregalocalstorage(){
    return JSON.parse(localStorage.getItem('Alunos'))
};

function limpar(event){
    
    event.preventDefault();
    document.querySelector('form').reset();
    console.log('Limpando....');
};

function editar(event){
    event.preventDefault();
    console.log('editando....');

    var id = document.getElementsByName('id')[0].value;
    var name = document.getElementsByName('nome')[0].value;
    var media = document.getElementsByName('media')[0].value;
    var situation = document.getElementsByName('situacao')[0].value;

    var Aluno = {
        'id': id,
        'nome': name,
        'media': media,
        'situacao': situation
};

var lista = carregalocalstorage();
var novalista = [];

lista.forEach(e => {
    if (e['id'!= id]){

        novalista.push(e);
    }
    else{
        novalista.push(Aluno);
    }
    
});
localStorage.setItem('Alunos', JSON.stringify(novalista));
alert('Editado com Sucesso...')
};

function carregaCampos(dado){

    document.getElementsByName('id')[0].value = dado['id'];
    document.getElementsByName('nome')[0].value = dado['nome'];
    document.getElementsByName('media')[0].value = dado['media'];
    document.getElementsByName('situacao')[0].value = dado['situacao'];

};

function carregadados(){

    var urlParameters = new URLSearchParams(window.location.search);

    var id = parseInt = (urlParameters.get('id'));

    var alunos = JSON.parse(localStorage.getItem('Alunos'));

    alunos.forEach(e =>{
        if (['id'] == id) {
            carregacCampos(e)

        }



    });

};

window.onload = carregadados()