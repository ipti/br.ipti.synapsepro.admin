const TOKEN_KEY = "token";
const id_key = "user-id";

const id_project = "id-project";
const menu_key = "menu";

export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) !== null;
};


export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};


export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(id_key);
  localStorage.removeItem(id_project);

  localStorage.clear();
};

export const idUser = (id: string) => {
  localStorage.setItem(id_key, id);
}

export const idProject = (id: string) => {
  localStorage.setItem(id_project, id);
}

export const GetIdProject = () => {
  return localStorage.getItem(id_project);
}

export const GetIdUser = () => {
  return localStorage.getItem(id_key);
}
export const menuItem = (id: string) => {
  localStorage.setItem(menu_key, id);
}


export const getMenuItem = () => {
  return localStorage.getItem(menu_key);
}
