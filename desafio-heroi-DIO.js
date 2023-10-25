// Declara um array para armazenar os heróis
const herois = [];

// Declara as classificações
const classificacoes = ['Ferro', 'Bronze', 'Prata', 'Ouro','Platina','Ascendente','Imortal','Radiante'];

// Declara o limite de xp para cada classificação
const limites = [1001, 2001, 6001, 7001, 8001, 9001, 10001]; 

// Solicita a entrada do usuário
while (true) {
  // Declara as variáveis
  const heroi = String(prompt("Digite o nome do seu herói: "));
  const xp = parseInt(prompt('Quanto de "xp" o seu herói tem? '));

  // Adiciona o herói ao array
  herois.push({
    name: heroi,
    xp: xp,
  });

  // Verifica se o usuário deseja parar
  const resposta = prompt("Deseja adicionar outro herói? (S/N)");
  if (resposta === "N") {
    break;
  }
}

// Exibe os heróis
for (const heroi of herois) {
  console.log(`O herói ${heroi.name} está no nivel de ${classificacoes[classificacao(heroi.xp)]}.`);
}

// Função para classificar o herói
function classificacao(xp) {
  for (let i = 0; i < limites.length; i++) {
    if (xp < limites[i]) {
      return i;
    }
  }
  return limites.length - 1;
}
