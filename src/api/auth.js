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
    console.log(error?.response?.data?.message);
  }
};

export const login = async ({ id, password }) => {
  try {
    const res = await axios.post(`${authApi}/login?expiresIn=10m`, {
      id,
      password,
    });
    console.log(res.data);
    localStorage.setItem("Token", res.data.accessToken);

    return res.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message)
  }
};

export const userInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    try {
     const res = await axios.get(authApi + '/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res.data
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }
};
