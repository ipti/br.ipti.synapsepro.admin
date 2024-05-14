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

export function formatarData(data: string): string {
  var date = data.toString().split("T")[0]
  var dataEdit = date.split("-").reverse().join("/");
  return dataEdit;
}

export function somarNumeros(num1: number, num2: number): number {
  console.log(num1+num2)
  console.log(num1, num2)

  return parseInt(`${num1 + num2}`);
}

export const Status = {
  APPROVED: "APPROVED",
  PENDING: "PENDING",
  REPROVED: "REPROVED",
}

export const ROLE = {
  ADMIN: "ADMIN",
  USER: "USER",
  REAPPLICATORS: "REAPPLICATORS",
  COORDINATORS: 'COORDINATORS'
}