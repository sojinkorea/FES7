import { createSlice } from "@reduxjs/toolkit";

const expenceSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    // 사용자의 지출 목록을 관리합니다.
    expenseList: [
      { name: "coffee", price: 5000 },
      { name: "icecream", price: 1500 },
    ],
  },

  reducers: {
    // addExpenseAction ==> 액션 type의 이름입니다.
    addExpenseAction: () => {
      console.log("addExpenseAction");
    },
  },
});

// action을 디스패치에서 사용할 수 있도록 밖으로 내보냅니다.
export const { addExpenseAction } = expenceSlice.actions;

// slice에서 생성한 reducer들을 외부로 내보냅니다.
export default expenceSlice.reducer;
