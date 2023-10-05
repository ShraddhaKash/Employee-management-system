import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";
// import axios from "axios";
import {
  deleteEmployeedata,
  editEmployeeData,
  updateEmployeeData,
} from "../../service/employeeService";

const initialState = {
  employee: [
    {
      _id: "",
      fname: "",
      lname: "",
      email: "",
      phone: "",
      domain: "",
    },
  ],
};

// export const getEmployee = createAsyncThunk(
//   "addEmployee/getEmployeeData",
//   async function (data) {
//     return getEmployeeData(data);
//   }
// );

export const updateEmployee = createAsyncThunk(
  "addEmployee/updateEmployeeData",
  async function (data) {
    return updateEmployeeData(data);
  }
);

export const editEmployees = createAsyncThunk(
  "addEmployee/editEmployeeData",
  async function ({ _id, empData }) {
    return editEmployeeData(_id, empData);
  }
);

export const deleteEmployee = createAsyncThunk(
  "addEmployee/deleteEmployeeData",
  async function (_id) {
    return deleteEmployeedata(_id);
  }
);

const addEmployeeSlice = createSlice({
  name: "addEmployee",
  initialState,
  reducers: {
    // addItem(state, action) {
    //   const emp = {
    //     id: nanoid(),
    //     firstName: action.payload.firstName,
    //     lastName: action.payload.lastName,
    //     email: action.payload.email,
    //     phoneNo: action.payload.phoneNo,
    //     domain: action.payload.domain,
    //   };
    //   state.employee.push(emp);
    // },
    // deleteEmployeedata(state, action) {
    //   state.employee = state.employee.filter(
    //     (emp) => emp.id !== action.payload
    //   );
    // },
    // editItem(state, action) {
    //   state.employee.map((emp) => {
    //     if (emp.id === action.payload.id) {
    //       emp.firstName = action.payload.firstName;
    //       emp.lastName = action.payload.lastName;
    //       emp.email = action.payload.email;
    //       emp.phoneNo = action.payload.phoneNo;
    //       emp.domain = action.payload.domain;
    //     }
    //     return null;
    //   });
    // },
    clearListItems(state, action) {
      state.employee = [];
    },
    setEmployee(state, action) {
      state.employee = action.payload;
    },
  },
});

export const { addItem, deleteItem, editItem, clearListItems, setEmployee } =
  addEmployeeSlice.actions;

export default addEmployeeSlice.reducer;
