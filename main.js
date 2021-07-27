// VARIABLES
const tax = 0.07;
const message = document.querySelector('#message');
const button = document.querySelector('#button');
let userName = document.querySelector('#userName');
let months = document.querySelector('#months');
let answer = 0;
let regularAnual = document.querySelector('#regular-anual');
let oabAnual = document.querySelector('#oab-anual');
let regularQuadri = document.querySelector('#regular-quadri');
let oabQuadri = document.querySelector('#oab-quadri');
let infosAnual = document.querySelector('#infos-anual');
let infosSem = document.querySelector('#infos-sem');

// Functions
const calcRefund = function (value, plano) {
  const totalValue = value * plano;
  const refund = totalValue - tax * totalValue - months * value;
  return refund;
};

const getUser = function () {
  userName.addEventListener('change', function () {
    userName = userName.value;
    console.log(userName);
  });
};
getUser();

const getMonths = function () {
  months.addEventListener('change', function () {
    months = Number(document.querySelector('#months').value);
    if (months >= 1 && months <= 12) {
      console.log(months);
    } else {
      alert('Por favor insira um número entre 1 e 12');
    }
    return months;
  });
};
getMonths();

const getMessage = function () {
  message.textContent = `Olá ${userName}! Você tem direito ao reembolso no valor de
R$${answer} em função dos ${months} meses
utilizados.`;
};

//Regular anual - Pegando informações
const getRegularAnual = function () {
  regularAnual.addEventListener('click', function () {
    regularAnual.classList.toggle('active');
  });
};
getRegularAnual();

//OAB anual - Pegando informações
const getOabAnual = function () {
  oabAnual.addEventListener('click', function () {
    oabAnual.classList.toggle('active');
  });
};
getOabAnual();

//Regular Quadrimestral - Pegando informações
const getRegularQuadri = function () {
  regularQuadri.addEventListener('click', function () {
    regularQuadri.classList.toggle('active');
  });
};
getRegularQuadri();

//OAB Quadrimestral - Pegando informações
const getOabQuadri = function () {
  oabQuadri.addEventListener('click', function () {
    oabQuadri.classList.toggle('active');
  });
};
getOabQuadri();

//Informativos Anual - Pegando informações
const getInfosAnual = function () {
  infosAnual.addEventListener('click', function () {
    infosAnual.classList.toggle('active');
  });
};
getInfosAnual();

//Informativos Semestral - Pegando informações
const getInfosSem = function () {
  infosSem.addEventListener('click', function () {
    infosSem.classList.toggle('active');
  });
};
getInfosSem();

const readyButton = button.addEventListener('click', function (event) {
  //Mostrar resultado e aumentar janela
  event.preventDefault();
  document.querySelector('#results').classList.remove('hide');
  document.querySelector('#container').style.height = '48rem';

  //Regular anual (cálculo)
  regularAnual = regularAnual.classList.contains('active');

  //OAB Anual (cálculo)
  oabAnual = oabAnual.classList.contains('active');

  //Regular Quadri (cálculo)
  regularQuadri = regularQuadri.classList.contains('active');

  //OAB Quadri (cálculo)
  oabQuadri = oabQuadri.classList.contains('active');

  //Infos Anual (cálculo)
  infosAnual = infosAnual.classList.contains('active');

  //Infos Quadri (cálculo)
  infosSem = infosSem.classList.contains('active');

  //Condições (cálculo)
  if (regularAnual) {
    answer = parseFloat(calcRefund(39.9, 12)).toFixed(2);
    getMessage();
  } else if (oabAnual) {
    answer = parseFloat(calcRefund(44.9, 12)).toFixed(2);
    getMessage();
  } else if (regularQuadri) {
    answer = parseFloat(calcRefund(39.9, 4)).toFixed(2);
    getMessage();
  } else if (oabQuadri) {
    answer = parseFloat(calcRefund(44.9, 4)).toFixed(2);
    getMessage();
  } else if (infosAnual) {
    answer = parseFloat(calcRefund(9.9, 12)).toFixed(2);
    getMessage();
  } else if (infosSem) {
    answer = parseFloat(calcRefund(9.9, 6)).toFixed(2);
    getMessage();
  }
});
