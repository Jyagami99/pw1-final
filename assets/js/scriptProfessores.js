let arrayProfessores = [];

function cadastroProfessor() {
  let storage = localStorage.getItem("professoresStorage");
  // console.log(storage);

  let professores = {
    RegistroFuncional: document.getElementById("registrof").value,
    NomeCompleto: document.getElementById("nomec").value,
    DataDeNascimento: document.getElementById("datanasc").value,
    Sexo: document.getElementById("sexo").value,
    AreaPesquisa: document.getElementById("areap").value,
    Universidade: document.getElementById("universi").value,
    Email: document.getElementById("email").value,
    Telefone: document.getElementById("telefone").value,
  };

  function verificarCadastro(VetorProfessor, RegistroFuncional) {
    for (let i = 0; i < VetorProfessor.length; i++) {
      if (VetorProfessor[i][0] === RegistroFuncional) {
        return i;
      }
    }
    return -1;
  }

  if (Object.values(professores).includes(""))
    return alert("Preencha todos os campos para concluir o cadastro!");

  let cadastro = verificarCadastro(
    arrayProfessores,
    professores.RegistroFuncional
  );

  if (cadastro == -1) {
    arrayProfessores.push(Object.values(professores));
    localStorage.setItem(
      "professoresStorage",
      JSON.stringify(arrayProfessores)
    );
    alert("Cadastro realizado com sucesso!");
  } else {
    alert("Professor já está cadastrado no sistema!");
  }
}

function mostraProfessor() {
  let storage = localStorage.getItem("professoresStorage");
  // console.log(storage);

  // if (arrayProfessores.length > 0) {
  if (storage) {
    let storageProfessores = JSON.parse(storage);
    let listaDeProfessores = "";

    for (let i = 0; i < storageProfessores.length; i++) {
      listaDeProfessores += ` 
      <p>
        Registro Funcional: ${storageProfessores[i][0]} 
        <br>
        Nome Completo:  ${storageProfessores[i][1]}
        <br>
        Data de Nascimento: ${storageProfessores[i][2]}
        <br>
          Sexo: ${storageProfessores[i][3]} 
        <br>
        Área de Pesquisa: ${storageProfessores[i][4]} 
        <br>
        Universidade: ${storageProfessores[i][5]} 
        <br>
        Email:  ${storageProfessores[i][6]} 
        <br>
        Telefone: ${storageProfessores[i][7]}
      </p>`;
    }
    document.querySelector(".conteudo").innerHTML = listaDeProfessores;
  } else {
    alert("Não há professores cadastrados!");
  }
}

function pesquisarPorRF() {
  let storage = localStorage.getItem("professoresStorage");
  let storageProfessores = JSON.parse(storage);
  let registroFuncional = document.getElementById(
    "registroFuncionalEspecifico"
  ).value;
  let conteudo = document.querySelector(".conteudo");

  // if (registroFuncional.length !== 0) {
  // console.log(storageProfessores.length);
  if (storageProfessores) {
    for (let i = 0; i < storageProfessores.length; i++) {
      if (storageProfessores[i][0] === registroFuncional) {
        conteudo.innerHTML = `
        <p>
          Registro Funcional: ${storageProfessores[i][0]} 
          <br>
          Nome Completo:  ${storageProfessores[i][1]}
          <br>
          Data de Nascimento: ${storageProfessores[i][2]}
          <br>
            Sexo: ${storageProfessores[i][3]} 
          <br>
          Área de Pesquisa: ${storageProfessores[i][4]} 
          <br>
          Universidade: ${storageProfessores[i][5]} 
          <br>
          Email:  ${storageProfessores[i][6]} 
          <br>
          Telefone: ${storageProfessores[i][7]}
        </p>`;
        break;
      } else {
        alert("Insira um RF válido!");
        break;
      }
    }
  } else {
    alert("Não há professores cadastrados!");
  }
}

function listarEspecifico() {
  let conteudo = document.querySelector(".conteudo");
  conteudo.innerHTML = `
  <div class="pesquisaEspecifica">
    <input
      type="text"
      class="registroFuncionalEspecifico"
      id="registroFuncionalEspecifico"
      placeholder="Digite o RF desejado"
      required
    />
    <button class="botao" onclick="pesquisarPorRF()">Pesquisar</button>
  </div>
  `;
}

function mostraCadastro() {
  let conteudo = document.querySelector(".conteudo");
  conteudo.innerHTML = `
  <form class="formularioCadastro" name="searchfield" method="get">
    <input
      type="text"
      id="registrof"
      name="registrof"
      placeholder="Registro Funcional"
      required
    />
    <input
      type="text"
      id="nomec"
      name="nomec"
      placeholder="Nome completo"
      required
    />
    <input
      type="date"
      id="datanasc"
      name="datanasc"
      placeholder="Data de nascimento"
      required
    />
    <input
      type="text"
      id="sexo"
      name="sexo"
      placeholder="Sexo"
      required
    />
    <input
      type="text"
      id="areap"
      name="areap"
      placeholder="Area de pesquisa"
      required
    />
    <input
      type="text"
      id="universi"
      name="universi"
      placeholder="Universidade"
      required
    />
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      required
    />
    <input
      type="tel"
      id="telefone"
      name="telefone"
      minlength="10"
      maxlength="11"
      placeholder="Telefone"
      required
    />
  </form>
  <button id="botao" class="botao" onclick="cadastroProfessor()">
    Cadastrar Professor
  </button>
  `;
}

function excluiDado() {
  let storage = localStorage.getItem("professoresStorage");
  let storageProfessores = JSON.parse(storage);
  let registroFuncional = document.getElementById(
    "registroFuncionalEspecifico"
  ).value;

  // if (registroFuncional.length !== 0) {
  if (storageProfessores) {
    for (let i = 0; i < storageProfessores.length; i++) {
      if (storageProfessores[i][0] === registroFuncional) {
        storageProfessores.splice(i, 1);
        // console.log(storageProfessores);
        localStorage.setItem(
          "professoresStorage",
          JSON.stringify(storageProfessores)
        );
        alert(
          `O professor com RF ${registroFuncional} foi deletado do sistema!`
        );
        break;
      }
    }
  } else {
    alert("Não há professores cadastrados!");
  }
}

function excluiEspecifico() {
  let conteudo = document.querySelector(".conteudo");
  conteudo.innerHTML = `
  <div class="pesquisaEspecifica">
    <input
      type="text"
      class="registroFuncionalEspecifico"
      id="registroFuncionalEspecifico"
      placeholder="Digite o RF que deseja excluir"
      required
    />
    <button class="botao" onclick="excluiDado()">Pesquisar</button>
  </div>
  `;
}

function atualizaCadastro(rf) {
  let storage = localStorage.getItem("professoresStorage");
  let storageProfessores = JSON.parse(storage);
  let dados = {
    NomeCompleto: document.getElementById("nomec").value,
    DataDeNascimento: document.getElementById("datanasc").value,
    Sexo: document.getElementById("sexo").value,
    AreaPesquisa: document.getElementById("areap").value,
    Universidade: document.getElementById("universi").value,
    Email: document.getElementById("email").value,
    Telefone: document.getElementById("telefone").value,
  };

  let registroFuncional = rf;

  console.log(storageProfessores);
  console.log(storageProfessores.length);

  for (let i = 0; i < storageProfessores.length; i++) {
    if (storageProfessores[i][0] == registroFuncional) {
      storageProfessores[i].splice(1, 1, dados.NomeCompleto);
      storageProfessores[i].splice(2, 1, dados.DataDeNascimento);
      storageProfessores[i].splice(3, 1, dados.Sexo);
      storageProfessores[i].splice(4, 1, dados.AreaPesquisa);
      storageProfessores[i].splice(5, 1, dados.Universidade);
      storageProfessores[i].splice(6, 1, dados.Email);
      storageProfessores[i].splice(7, 1, dados.Telefone);

      localStorage.setItem(
        "professoresStorage",
        JSON.stringify(storageProfessores)
      );
      break;
    }
  }
}

function exibeDadosProfessor(rf) {
  let conteudo = document.querySelector(".conteudo");
  conteudo.innerHTML = `
  <form class="formularioCadastro" name="searchfield" method="put">
    <input
      type="text"
      id="registrof"
      name="registrof"
      placeholder="Registro Funcional"
      value=${rf}
      disabled
      required
    />  
    <input
      type="text"
      id="nomec"
      name="nomec"
      placeholder="Nome completo"
      required
    />
    <input
      type="date"
      id="datanasc"
      name="datanasc"
      placeholder="Data de nascimento"
      required
    />
    <input
      type="text"
      id="sexo"
      name="sexo"
      placeholder="Sexo"
      required
    />
    <input
      type="text"
      id="areap"
      name="areap"
      placeholder="Area de pesquisa"
      required
    />
    <input
      type="text"
      id="universi"
      name="universi"
      placeholder="Universidade"
      required
    />
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      required
    />
    <input
      type="tel"
      id="telefone"
      name="telefone"
      minlength="10"
      maxlength="11"
      placeholder="Telefone"
      required
    />
  </form>
  <button id="botao" class="botao" onclick="atualizaCadastro(${rf})">
    Altera dado do Professor
  </button>
  `;
}

function alteraDado() {
  let storage = localStorage.getItem("professoresStorage");
  let storageProfessores = JSON.parse(storage);
  let registroFuncional = document.getElementById(
    "registroFuncionalEspecifico"
  ).value;

  // if (registroFuncional.length !== 0) {
  if (storageProfessores) {
    for (let i = 0; i < storageProfessores.length; i++) {
      if (storageProfessores[i][0] === registroFuncional) {
        exibeDadosProfessor(registroFuncional);
        break;
      }
    }
  } else {
    alert("Insira um RF válido!");
  }
}

function alteraEspecifico() {
  let conteudo = document.querySelector(".conteudo");
  conteudo.innerHTML = `
  <div class="pesquisaEspecifica">
    <input
      type="text"
      class="registroFuncionalEspecifico"
      id="registroFuncionalEspecifico"
      placeholder="Digite o RF que deseja alterar"
      required
    />
    <button id="botao" class="botao" onclick="alteraDado()">Pesquisar</button>
  </div>
  `;
}
