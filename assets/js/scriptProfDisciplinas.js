function criarTabela() {
  let objTable = document.createElement("table");
  let objTHead = document.createElement("thead");
  let objetoTrh = document.createElement("tr");
  let objTh1 = document.createElement("th");
  let objTxt1 = document.createTextNode("Registro Funcional");

  objTh1.appendChild(objTxt1);

  let objTh2 = document.createElement("th");
  let objTxt2 = document.createTextNode("Sigla");

  objTh2.appendChild(objTxt2);

  let objTh3 = document.createElement("th");
  let objTxt3 = document.createTextNode("Disciplina");

  objTh3.appendChild(objTxt3);

  let objTh4 = document.createElement("th");
  let objTxt4 = document.createTextNode("Ano");

  objTh4.appendChild(objTxt4);

  let objTh5 = document.createElement("th");
  let objTxt5 = document.createTextNode("Semestre");

  objTh5.appendChild(objTxt5);

  let objTh6 = document.createElement("th");
  let objTxt6 = document.createTextNode("Dias da Semana");

  objTh6.appendChild(objTxt6);

  let objTh7 = document.createElement("th");
  let objTxt7 = document.createTextNode("Horário");

  objTh7.appendChild(objTxt7);
  objetoTrh.appendChild(objTh1);
  objetoTrh.appendChild(objTh2);
  objetoTrh.appendChild(objTh3);
  objetoTrh.appendChild(objTh4);
  objetoTrh.appendChild(objTh5);
  objetoTrh.appendChild(objTh6);
  objetoTrh.appendChild(objTh7);
  objTHead.appendChild(objetoTrh);
  objTable.appendChild(objTHead);

  let objTBody = document.createElement("tbody");

  objTable.appendChild(objTBody);
  objTBody.setAttribute("id", "tb1");

  let objBody = document.getElementsByTagName("body")[0];

  objBody.appendChild(objTable);
}

function criarLinha() {
  let tbody1 = document.getElementById("tb1");
  let objetoTr = document.createElement("tr");
  let objTd1 = document.createElement("td");
  let objTxt1 = document.createTextNode(
    document.getElementById("registrof").value
  );

  objTd1.appendChild(objTxt1);

  let objTd2 = document.createElement("td");
  let objTxt2 = document.createTextNode(document.getElementById("sigla").value);

  objTd2.appendChild(objTxt2);

  let objTd3 = document.createElement("td");
  let objTxt3 = document.createTextNode(
    document.getElementById("disciplina").value
  );

  objTd3.appendChild(objTxt3);

  let objTd4 = document.createElement("td");
  let objTxt4 = document.createTextNode(document.getElementById("ano").value);

  objTd4.appendChild(objTxt4);

  let objTd5 = document.createElement("td");
  let objTxt5 = document.createTextNode(
    document.getElementById("semestre").value
  );

  objTd5.appendChild(objTxt5);

  let objTd6 = document.createElement("td");
  let objTxt6 = document.createTextNode(
    document.getElementById("diasemana").value
  );

  objTd6.appendChild(objTxt6);

  let objTd7 = document.createElement("td");
  let objTxt7 = document.createTextNode(
    document.getElementById("horario").value
  );

  objTd7.appendChild(objTxt7);

  objetoTr.appendChild(objTd1);
  objetoTr.appendChild(objTd2);
  objetoTr.appendChild(objTd3);
  objetoTr.appendChild(objTd4);
  objetoTr.appendChild(objTd5);
  objetoTr.appendChild(objTd6);
  objetoTr.appendChild(objTd7);

  tbody1.appendChild(objetoTr);
}
