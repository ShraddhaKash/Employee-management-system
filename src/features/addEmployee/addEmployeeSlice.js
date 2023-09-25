import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  employee: [],
};

const addEmployeeSlice = createSlice({
  name: "addEmployee",
  initialState,
  reducers: {
    addItem(state, action) {
      const emp = {
        id: nanoid(),
        fname: action.payload.fname,
        lname: action.payload.lname,
        email: action.payload.email,
        phone: action.payload.phone,
        domain: action.payload.domain,
      };
      state.employee.push(emp);
    },
    deleteItem(state, action) {
      state.employee = state.employee.filter(
        (emp) => emp.id !== action.payload
      );
    },
    editItem(state, action) {
      state.employee.map((emp) => {
        if (emp.id === action.payload.id) {
          emp.fname = action.payload.fname;
          emp.lname = action.payload.lname;
          emp.email = action.payload.email;
          emp.phone = action.payload.phone;
          emp.domain = action.payload.domain;
        }
        return null;
      });
    },
    clearListItems(state, action) {
      state.employee = [];
    },
  },
});

export const { addItem, deleteItem, editItem, clearListItems } =
  addEmployeeSlice.actions;

export default addEmployeeSlice.reducer;
