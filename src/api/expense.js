import axios from "axios";
import { json } from "react-router-dom";

const jsonServer = "http://localhost:5000";

export const getExpense = async () => {
  try {
    const res = await axios.get(jsonServer + "/expenses");
    return res.data;
  } catch (error) {
    alert("데이터 로드에 문제가 발생했습니다.");
  }
};

export const getDetailExpense = async ({ queryKey }) => {
  try {
    const res = await axios.get(`${jsonServer}/expenses/${queryKey[1]}`);
    return res.data;
  } catch (error) {
    alert("데이터 로드에 문제가 발생했습니다.");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const res = await axios.post(jsonServer + "/expenses", newExpense);
    return res.data;
  } catch (error) {
    console.log(error);
    alert("데이터 입력에 문제가 발생했습니다.");
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const res = await axios.put(`${jsonServer}/expenses/${id}`, rest);
    return res.data;
  } catch (error) {
    console.log(error);
    alert("데이터 입력에 문제가 발생했습니다.");
  }
};
