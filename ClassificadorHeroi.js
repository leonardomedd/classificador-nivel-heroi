// Desafio Classificador de nível de Herói
// Autor Leonardo Almeida 

const nomeHeroi = "Leonardo"; // Nome fixo
const xpHeroi = 11000; // XP fixo

// Função para classificar o nível do herói
function classificarHeroi(nome, xp) {
  let nivel;

  switch (true) {
    case (xp < 1000):
      nivel = "Ferro";
      break;
    case (xp >= 1001 && xp <= 2000):
      nivel = "Bronze";
      break;
    case (xp >= 2001 && xp <= 5000):
      nivel = "Prata";
      break;
    case (xp >= 5001 && xp <= 7000):
      nivel = "Ouro";
      break;
    case (xp >= 7001 && xp <= 8000):
      nivel = "Platina";
      break;
    case (xp >= 8001 && xp <= 9000):
      nivel = "Ascendente";
      break;
    case (xp >= 9001 && xp <= 10000):
      nivel = "Imortal";
      break;
    case (xp >= 10001):
      nivel = "Radiante";
      break;
    default:
      nivel = "Desconhecido"; // Caso não se encaixe em nenhuma faixa
  }

  return `O Herói de nome ${nome} está no nível de ${nivel}`;
}

console.log(classificarHeroi(nomeHeroi, xpHeroi));