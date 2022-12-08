let arrayDisciplinas = [];

function cadastrarDisciplina() {
  let storage = localStorage.getItem("disciplinasStorage");
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
    localStorage.setItem(
      "disciplinasStorage",
      JSON.stringify(arrayDisciplinas)
    );
    alert("Cadastro realizado com sucesso!");
  } else {
    alert("Disciplina já está cadastrada no sistema!");
  }
}

function mostrarDisciplinas() {
  let storage = localStorage.getItem("disciplinasStorage");
  // if (arrayDisciplinas.length > 0) {
  if (storage) {
    let formulario = document.querySelector(".formularioCadastro");
    formulario.classList.toggle(".d-none");

    let storageDisciplinas = JSON.parse(storage);
    let listaDeDisciplinas = "";

    for (let i = 0; i < storageDisciplinas.length; i++) {
      listaDeDisciplinas += `
            <p>
            Sigla: ${storageDisciplinas[i][0]}
            <br>
            Nome Disciplina:  ${storageDisciplinas[i][1]}
            <br>
            Ementa: ${storageDisciplinas[i][2]}
            <br>
            Livros e Bibliografia: ${storageDisciplinas[i][3]}
            <br>
            Número de Créditos: ${storageDisciplinas[i][4]}
            <br>
            Carga Horária: ${storageDisciplinas[i][5]}
            </p>`;
    }
    document.querySelector(".conteudo").innerHTML = listaDeDisciplinas;
  } else {
    alert("Não há disciplinas cadastradas!");
  }
}

function pesquisarPorSigla() {
  let storage = localStorage.getItem("disciplinasStorage");
  let storageDisciplinas = JSON.parse(storage);
  let sigla = document.getElementById("siglaEspecifica").value;
  let conteudo = document.querySelector(".conteudo");

  // if (sigla.length !== 0) {
  if (storageDisciplinas) {
    for (let i = 0; i < storageDisciplinas.length; i++) {
      if (storageDisciplinas[i][0] === sigla) {
        conteudo.innerHTML = `
        <p>
          Sigla: ${storageDisciplinas[i][0]}
          <br>
          Nome:  ${storageDisciplinas[i][1]}
          <br>
          Ementa: ${storageDisciplinas[i][2]}
          <br>
          Livros e Bibliografia: ${storageDisciplinas[i][3]}
          <br>
          Número de Créditos: ${storageDisciplinas[i][4]}
          <br>
          Carga Horária: ${storageDisciplinas[i][5]}
        </p>`;
        break;
      } else {
        alert("Insira uma sigla válida!");
      }
    }
  } else {
    alert("Não há disciplinas cadastradas!");
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
  let storage = localStorage.getItem("disciplinasStorage");
  let storageDisciplinas = JSON.parse(storage);
  let sigla = document.getElementById("siglaEspecifica").value;
  // let conteudo = document.querySelector(".conteudo");

  // if (sigla.length !== 0) {
  if (storageDisciplinas) {
    for (let i = 0; i < storageDisciplinas.length; i++) {
      if (storageDisciplinas[i][0] === sigla) {
        storageDisciplinas.splice(i, 1);
        localStorage.setItem(
          "disciplinasStorage",
          JSON.stringify(storageDisciplinas)
        );
        alert(`A disciplina com a Sigla ${sigla} foi deletada do sistema!`);
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

function atualizaCadastro(sigla) {
  let storage = localStorage.getItem("disciplinasStorage");
  let storageDisciplinas = JSON.parse(storage);
  let dados = {
    NomeDisciplina: document.getElementById("nomed").value,
    Ementa: document.getElementById("ementa").value,
    LivrosBibliografia: document.getElementById("livros_bibliografia").value,
    NumeroCreditos: document.getElementById("numeroCreditos").value,
    CargaHoraria: document.getElementById("cargaHoraria").value,
  };

  let minhasigla = sigla;

  for (let i = 0; i < storageDisciplinas.length; i++) {
    if (storageDisciplinas[i][0] === minhasigla) {
      storageDisciplinas[i].splice(1, 1, dados.NomeDisciplina);
      storageDisciplinas[i].splice(2, 1, dados.Ementa);
      storageDisciplinas[i].splice(3, 1, dados.LivrosBibliografia);
      storageDisciplinas[i].splice(4, 1, dados.NumeroCreditos);
      storageDisciplinas[i].splice(5, 1, dados.CargaHoraria);

      localStorage.setItem(
        "disciplinasStorage",
        JSON.stringify(storageDisciplinas)
      );
      break;
    }
  }
}

function exibeDadosDisciplina(sigla) {
  let conteudo = document.querySelector(".conteudo");
  console.log(sigla);
  conteudo.innerHTML = `
  <form class="formularioCadastro" name="searchfield" method="put">
    <input
      type="text"
      id="sigla"
      name="sigla"
      placeholder="Sigla da disciplina"
      value=${sigla}
      disabled
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
  <button id="botao" class="botao" onclick="atualizaCadastro(${sigla})">
    Altera dado da disciplina
  </button>
  `;
}

function alteraDado() {
  let storage = localStorage.getItem("disciplinasStorage");
  let storageDisciplinas = JSON.parse(storage);
  let sigla = document.getElementById("siglaEspecifica").value;

  if (storageDisciplinas) {
    for (let i = 0; i < storageDisciplinas.length; i++) {
      if (storageDisciplinas[i][0] === sigla) {
        // mostraCadastro(sigla);
        exibeDadosDisciplina(sigla);
        break;
      }
    }
  } else {
    alert("Insira uma sigla válida!");
  }
}

function alteraEspecifico() {
  let conteudo = document.querySelector(".conteudo");
  conteudo.innerHTML = `
  <div class="pesquisaEspecifica">
    <input
      type="text"
      class="siglaEspecifica"
      id="siglaEspecifica"
      placeholder="Digite a sigla que deseja alterar"
      required
    />
    <button id="botao" class="botao" onclick="alteraDado()">Pesquisar</button>
  </div>
  `;
}
