import React from "react";
import { useDispatch } from "react-redux";
import { addExpenseAction } from "../../store/expense/expense-slice";

export default function ExpenseInput() {
  const dispatch = useDispatch;

  function submit(event) {
    event.preventDefault();
    dispatch(addExpenseAction());
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label>
          지출 상품명 : <input type="text" placeholder='예: "사과"' onChange={(event) => setName(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          지출 상품 금액 : <input type="number" placeholder="예: 5000" onChange={(event) => setPrice(event.target.value)} />
        </label>
      </div>
      <button type="submit">추가</button>
    </form>
  );
}
