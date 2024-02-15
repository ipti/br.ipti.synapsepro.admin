export const gerarIdAleatorio = (tamanho: number) => {
    const caracteres =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let id = "";

    for (let i = 0; i < tamanho; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      id += caracteres.charAt(indiceAleatorio);
    }

    return id;
  };

 export function formatarData(data: Date): string {
    const dia: number = data.getDate();
    const mes: number = data.getMonth() + 1; // Os meses começam do zero, então adicionamos 1
    const ano: number = data.getFullYear();
    
    // Adicionando zeros à esquerda para garantir que cada parte da data tenha dois dígitos
    const diaFormatado: string = dia < 10 ? `0${dia}` : `${dia}`;
    const mesFormatado: string = mes < 10 ? `0${mes}` : `${mes}`;

    return `${diaFormatado}/${mesFormatado}/${ano}`;
}