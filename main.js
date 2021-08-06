// VARIABLES
const tax = 0.07;
const button = document.querySelector('#button');
const resetButton = document.querySelector('#reset-button');
const forms = document.querySelector('select');

let valuePlano, answer, multiplier;
let userName = document.querySelector('#userName');
let months = document.querySelector('#months');

let assinaturas = document.querySelector('#assinaturas');
let regularAnual = document.querySelector('#regular-anual');
let oabAnual = document.querySelector('#oab-anual');
let regularQuadri = document.querySelector('#regular-quadri');
let oabQuadri = document.querySelector('#oab-quadri');
let infosAnual = document.querySelector('#infos-anual');
let infosSem = document.querySelector('#infos-sem');

// Functions
const calcRefund = function (value, plano, mult) {
  const totalValue = value * plano;
  const refund = totalValue - tax * totalValue - months * mult;
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
  document.querySelector(
    '#user-message'
  ).textContent = `Usuário: ${userName}; `;
  document.querySelector('#plano-message').textContent = `Assinatura: ${
    document.querySelector('.active').value
  }; `;
  document.querySelector(
    '#months-message'
  ).textContent = `Meses utilizados: ${months};`;
  document.querySelector(
    '#plano-value'
  ).textContent = `Valor mensal: R$${valuePlano};`;
  document.querySelector(
    '#refund'
  ).textContent = `Valor do reembolso: R$${answer};`;
};

const getAssinatura = () => {
  if (forms.value === 'Trilhante Regular (anual)') {
    regularAnual.classList.toggle('active');
    valuePlano = 24.9;
    multiplier = 39.9;
  } else if (forms.value === 'Trilhante + OAB (anual)') {
    oabAnual.classList.toggle('active');
    valuePlano = 29.9;
    multiplier = 44.9;
  } else if (forms.value === 'Trilhante Regular (quadri)') {
    regularQuadri.classList.toggle('active');
    valuePlano = 34.9;
    multiplier = 39.9;
  } else if (forms.value === 'Trilhante + OAB (quadri)') {
    oabQuadri.classList.toggle('active');
    valuePlano = 39.9;
    multiplier = 44.9;
  } else if (forms.value === 'Informativos Anual') {
    infosAnual.classList.toggle('active');
    valuePlano = 7.9;
    multiplier = 9.9;
  } else if (forms.value === 'Informativos Semestral') {
    infosSem.classList.toggle('active');
    valuePlano = 9.9;
    multiplier = 9.9;
  }
};

const changeAssinatura = () => {
  assinaturas.addEventListener('change', getAssinatura);
};
changeAssinatura();

const readyButton = button.addEventListener('click', function (event) {
  //Mostrar resultado e aumentar janela
  event.preventDefault();
  document.querySelector('#results').classList.remove('hide');
  document.querySelector('#container').style.height = 'fit-content';

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
    answer = parseFloat(calcRefund(valuePlano, 12, multiplier)).toFixed(2);
    getMessage();
  } else if (oabAnual) {
    answer = parseFloat(calcRefund(valuePlano, 12, multiplier)).toFixed(2);
    getMessage();
  } else if (regularQuadri) {
    answer = parseFloat(calcRefund(valuePlano, 4, multiplier)).toFixed(2);
    getMessage();
  } else if (oabQuadri) {
    answer = parseFloat(calcRefund(valuePlano, 4, multiplier)).toFixed(2);
    getMessage();
  } else if (infosAnual) {
    answer = parseFloat(calcRefund(valuePlano, 12, multiplier)).toFixed(2);
    getMessage();
  } else if (infosSem) {
    answer = parseFloat(calcRefund(valuePlano, 6, multiplier)).toFixed(2);
    getMessage();
  }
});

const init = function () {
  userName = '';
  months = 0;
  answer = 0;
  document.querySelectorAll('input').classList.remove('active');
  document.querySelector('#results').classList.add('hide');
};

resetButton.addEventListener('click', init);
