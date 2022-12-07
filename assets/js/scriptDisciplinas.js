let arrayDisciplinas = [];

function cadastrarDisciplina() {
  let disciplinas = {
    Sigla: document.getElementById("sigla").value,
    NomeDisciplina: document.getElementById("nomed").value,
    Ementa: document.getElementById("ementa").value,
    LivrosBibliografia: document.getElementById("livros_bibliografia").value,
    NumeroCreditos: document.getElementById("numeroCreditos").value,
    CargaHoraria: document.getElementById("cargaHoraria").value,
  };

  function verificarCadastro(VetorDisciplina, Sigla) {
    for (let i = 0; i < VetorDisciplina.length; i++) {
      if (VetorDisciplina[i][0] === Sigla) {
        return i;
      }
    }
    return -1;
  }

  if (Object.values(disciplinas).includes(""))
    return alert("Preencha todos os campos para concluir o cadastro!");

  let cadastro = verificarCadastro(arrayDisciplinas, disciplinas.Sigla);

  if (cadastro == -1) {
    arrayDisciplinas.push(Object.values(disciplinas));
    alert("Cadastro realizado com sucesso!");
  } else {
    alert("Disciplina já está cadastrada no sistema!");
  }
}

function mostrarDisciplinas() {
  if (arrayDisciplinas.length > 0) {
    let formulario = document.querySelector(".formularioCadastro");
    formulario.classList.toggle(".d-none");

    let listaDeDisciplinas = "";

    for (let i = 0; i < arrayDisciplinas.length; i++) {
      listaDeDisciplinas += ` 
            <p>
            Sigla: ${arrayDisciplinas[i][0]} 
            <br>
            Nome Disciplina:  ${arrayDisciplinas[i][1]}
            <br>
            Ementa: ${arrayDisciplinas[i][2]}
            <br>
            Livros e Bibliografia: ${arrayDisciplinas[i][3]} 
            <br>
            Número de Créditos: ${arrayDisciplinas[i][4]} 
            <br>
            Carga Horária: ${arrayDisciplinas[i][5]} 
            </p>`;
    }
    document.querySelector(".conteudo").innerHTML = listaDeDisciplinas;
  } else {
    alert("Não há disciplinas cadastradas!");
  }
}

function pesquisarPorSigla() {
  let sigla = document.getElementById("siglaEspecifica").value;
  let conteudo = document.querySelector(".conteudo");

  if (sigla.length !== 0) {
    for (let i = 0; i < arrayDisciplinas.length; i++) {
      if (arrayDisciplinas[i][0] === sigla) {
        conteudo.innerHTML = `
        <p>
          Sigla: ${arrayDisciplinas[i][0]} 
          <br>
          Nome:  ${arrayDisciplinas[i][1]}
          <br>
          Ementa: ${arrayDisciplinas[i][2]}
          <br>
          Livros e Bibliografia: ${arrayDisciplinas[i][3]} 
          <br>
          Número de Créditos: ${arrayDisciplinas[i][4]} 
          <br>
          Carga Horária: ${arrayDisciplinas[i][5]} 
        </p>`;
        break;
      }
    }
  } else {
    alert("Insira uma sigla válida!");
  }
}

function listarEspecifico() {
  let conteudo = document.querySelector(".conteudo");
  conteudo.innerHTML = `
  <div class="pesquisaEspecifica">
    <input
      type="text"
      class="siglaEspecifica"
      id="siglaEspecifica"
      placeholder="Digite a sigla desejada"
      required
    />
    <button class="botao" onclick="pesquisarPorSigla()">Pesquisar</button>
  </div>
  `;
}

function mostraCadastro() {
  let conteudo = document.querySelector(".conteudo");
  conteudo.innerHTML = `
  <form class="formularioCadastro" name="searchfield" method="get">
    <input
      type="text"
      id="sigla"
      name="sigla"
      placeholder="Sigla da disciplina"
      required
    />
      <input
      type="text"
      id="nomed"
      name="nomed"
      placeholder="Nome da disciplina"
      required
    />
      <input
      type="text"
      id="ementa"
      name="ementa"
      placeholder="Ementa"
      required
    />
      <input
      type="text"
      id="livros_bibliografia"
      name="livros_bibliografia"
      placeholder="Livros e Bibligrafia"
      required
    />
      <input
      type="number"
      id="numeroCreditos"
      name="numeroCreditos"
      placeholder="Número de Créditos"
      required
    />
      <input
      type="number"
      id="cargaHoraria"
      name="cargaHoraria"
      placeholder="Carga Horária"
      required
    />
  </form>
  <button id="botao" class="botao" onclick="cadastrarDisciplina()">
    Cadastrar disciplina
  </button>
  `;
}

function excluiDado() {
  let sigla = document.getElementById("siglaEspecifica").value;
  let conteudo = document.querySelector(".conteudo");

  if (sigla.length !== 0) {
    for (let i = 0; i < arrayDisciplinas.length; i++) {
      if (arrayDisciplinas[i][0] === sigla) {
        arrayDisciplinas.splice(i, 1);
        alert(
          `A disciplina com a Sigla ${registroFuncional} foi deletada do sistema!`
        );
      }
    }
  } else {
    alert("Insira uma sigla válida!");
  }
}

function excluiEspecifico() {
  let conteudo = document.querySelector(".conteudo");
  conteudo.innerHTML = `
  <div class="pesquisaEspecifica">
    <input
      type="text"
      class="siglaEspecifica"
      id="siglaEspecifica"
      placeholder="Digite a sigla que deseja excluir"
      required
    />
    <button class="botao" onclick="excluiDado()">Pesquisar</button>
  </div>
  `;
}
