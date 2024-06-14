import axios from "axios";

const authApi = " https://moneyfulpublicpolicy.co.kr";

export const updateProfile = async (formData) => {
    console.log(formData)
  const accessToken = localStorage.getItem("Token");
  if (accessToken) {
    try {
      const res = await axios.patch(authApi + "/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res.data;
    } catch (error) {}
  }
};
