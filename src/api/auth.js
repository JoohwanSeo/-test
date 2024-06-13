import axios from "axios";

const authApi = " https://moneyfulpublicpolicy.co.kr";

export const register = async ({ id, password, nickname }) => {
  try {
    const res = await axios.post(`${authApi}/register`, {
      id,
      password,
      nickname,
    });
    return res;
  } catch (error) {
    console.log(error?.response?.data?.message)
  }
};

export const login = async ({ id, password }) => {
    try {
      const res = await axios.post(`${authApi}/login?expiresIn=10m`, {
        id,
        password,
      });
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.message)
    }
  };





