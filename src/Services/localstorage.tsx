const TOKEN_KEY = "token";
const id_key = "cras-id";

const id_attendance = "cras-id-attendance";
const menu_key = "cras-menu";

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
  localStorage.removeItem(id_attendance);

  localStorage.clear();
};

export const idUser = (id: string) => {
  localStorage.setItem(id_key, id);
}

export const idAttendance = (id: string) => {
  localStorage.setItem(id_attendance, id);
}

export const GetIdAttendance = () => {
  return localStorage.getItem(id_attendance);
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
