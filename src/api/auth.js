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
    localStorage.setItem("Token", res.data.accessToken);

    return res.data;
  } catch (error) {
    alert("AccessToken이 만료됐습니다.");
    localStorage.clear();
  }
};

export const userInfo = async () => {
  const accessToken = localStorage.getItem("Token");
  if (accessToken) {
    try {
      const res = await axios.get(authApi + "/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res.data;
    } catch (error) {
      localStorage.clear();
    }
  }
};

export const updateProfile = async (formData) => {
  console.log(formData);
  const accessToken = localStorage.getItem("Token");
  if (accessToken) {
    try {
      const res = await axios.patch(authApi + "/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {}
  }
};
