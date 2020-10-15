var sobre = document.getElementById('sobre')
var imgSobre = document.getElementById('imgSobre')
var habilidades = document.getElementById('habilidades')
var imgHabilidade = document.getElementById('imgHabilidade')
var historico = document.getElementById('historico')
var imgHistorico = document.getElementById('imgHistorico')
var contato = document.getElementById('contato')
var imgContato = document.getElementById('imgContato')

function avancar(){
    sobre.style = 'color:green;    font-size: 25pt;    text-shadow: rgb(39, 38, 38) 2px 2px 2px;'
    imgSobre.style = ' width: 60px;'
}
function avancar2(){
    habilidades.style = 'color:red;    font-size: 25pt;    text-shadow: rgb(39, 38, 38) 2px 2px 2px;'
    imgHabilidade.style = 'width: 60px;'
}
function avancar3(){
    historico.style = 'color:yellow;    font-size: 25pt;    text-shadow: rgb(39, 38, 38) 2px 2px 2px;'
    imgHistorico.style = ' width: 60px;'
}
function avancar4(){
    contato.style = 'color:blue;    font-size: 25pt;    text-shadow: rgb(39, 38, 38) 2px 2px 2px;'
    imgContato.style = ' width: 60px;'
}
function sairAvanco(){
    sobre.style =   'color:black;    font-size: 20pt;'
    imgSobre.style = ' width: 30px;'

    habilidades.style =   'color:black;    font-size: 20pt;'
    imgHabilidade.style = ' width: 30px;'

    historico.style =   'color:black;    font-size: 20pt;'
    imgHistorico.style = ' width: 30px;'

    contato.style =   'color:black;    font-size: 20pt;'
    imgContato.style = ' width: 30px;'
}

