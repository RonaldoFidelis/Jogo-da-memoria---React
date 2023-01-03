const imagem = [
    "cry.png",
    "sleeping.png",
    "heart.png",
    "Panic.png",
];

// Função para atribuir os id a os pares da carta
const atribuirId = imagem.map((imagem, idPar) => ({
    idPar,
    imagem
}));

export const parDeCarta = [...atribuirId, ...atribuirId].map(
    (carta, id) => ({
        ...carta,
        id,
    })
);