import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./features/dashboardLogin/loginSlice";
import addEmployeeReducer from "./features/addEmployee/addEmployeeSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    addEmployee: addEmployeeReducer,
  },
});

export default store;
