import API from "../api/axios";


// ==========================================
// GET USERS
// ==========================================
export const getUsers = async (page = 1, limit = 5, search = "") => {
  const response = await API.get(
    `/users?page=${page}&limit=${limit}&search=${search}`
  );

  return response.data;
};


// ==========================================
// GET SINGLE USER
// ==========================================
export const getSingleUser = async (id) => {
  const response = await API.get(`/users/${id}`);

  return response.data;
};


// ==========================================
// CREATE USER
// ==========================================
export const createUser = async (userData) => {
  const response = await API.post("/users", userData);

  return response.data;
};


// ==========================================
// UPDATE USER
// ==========================================
export const updateUser = async (id, userData) => {
  const response = await API.put(`/users/${id}`, userData);

  return response.data;
};


// ==========================================
// DELETE USER
// ==========================================
export const deleteUser = async (id) => {
  const response = await API.delete(`/users/${id}`);

  return response.data;
};


// ==========================================
// EXPORT CSV
// ==========================================
export const exportUsersCSV = async () => {
  window.open("http://localhost:5000/api/users/export/csv");
};