"use strict";

var alunos = [{
  nome: 'Luis',
  nota: 8
}, {
  nome: 'Rafael',
  nota: 5
}, {
  nome: 'Ademir',
  nota: 7
}, {
  nome: 'Ruan',
  nota: 4
}, {
  nome: 'Leonardo',
  nota: 10
}];
function alunosAprovados(lista) {
  return lista.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosAprovados(alunos);
console.log(aprovados);