let coxinha = prompt(
  "Deseja comer uma coxinha?\n S - Sim\n N - Não "
).toUpperCase();
let conta = 0;

switch (coxinha) {
  case "S":
    conta++;
    alert(`Você pediu ${conta} coxinha(s). \n
    Valor total da conta: R$${conta * 2.5}`);
    break;

  case "N":
    alert("Você não fez nem um pedido. Obrigado.");
    break;

  default:
    while (coxinha !== "S" || coxinha !== "N") {
      alert("Opção inválida, selecione uma das opções disponíveis.");
      coxinha = prompt(
        "Deseja comer uma coxinha?\n S - Sim\n N - Não "
      ).toUpperCase();
      break;
    }
}

while (coxinha === "S") {
  coxinha = prompt(
    "Deseja comer mais uma coxinha?\n S - Sim\n N - Não "
  ).toUpperCase();
  conta++;
  alert(`Você pediu ${conta} coxinha(s). \n
          Valor atual da conta: R$${conta * 2.5}`);}

//   if (coxinha === "N") {
//     alert(`Valor total da conta: ${conta * 2.5}. Obrigado.`);
//   } else if (coxinha !== "S" || coxinha !== "N") {
//     alert("Opção inválida, selecione uma das opções disponíveis.");
//     coxinha = prompt(
//       "Deseja comer mais uma coxinha?\n S - Sim\n N - Não "
//     ).toUpperCase();
//   }
// 
