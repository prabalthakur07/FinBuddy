const API_URL = "http://localhost:5000/api";

// =========================
// REGISTER
// =========================
export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
};

// =========================
// LOGIN
// =========================
export const loginUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};

// =========================
// ADD EXPENSE
// =========================
export const addExpense = async (expenseData) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(expenseData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to add expense");
  }

  return data;
};

// =========================
// GET EXPENSES
// =========================
export const getExpenses = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/expenses`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch expenses");
  }

  return data;
};

// =========================
// UPDATE EXPENSE
// =========================
export const updateExpense = async (id, expenseData) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/expenses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(expenseData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update expense");
  }

  return data;
};

// =========================
// DELETE EXPENSE
// =========================
export const deleteExpense = async (id) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/expenses/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete expense");
  }

  return data;
};