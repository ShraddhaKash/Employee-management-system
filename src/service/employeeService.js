import axios from "axios";

export default async function getAllEmployees() {
  try {
    const response = await axios.get(`http://localhost:8080/employees`);
    return response;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
}

export async function updateEmployeeData(empData) {
  try {
    const response = await axios.post(
      `http://localhost:8080/employees`,
      empData
    );
    return response.data;
  } catch (error) {
    console.error("Error posting employee : ", error);
    throw error;
  }
}

export async function editEmployeeData(_id, empData) {
  try {
    const response = await axios.put(
      `http://localhost:8080/employees/${_id}`,
      empData
    );
    return response;
  } catch (error) {
    console.error("Error updating employee : ", error);
    throw error;
  }
}

export async function deleteEmployeedata(_id) {
  try {
    const response = await axios.delete(
      `http://localhost:8080/employees/${_id}`
    );
    return response;
  } catch (error) {
    console.error("Error deleting employee : ", error);
    throw error;
  }
}
