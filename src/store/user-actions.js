import { userActions } from "./user-slice";
export const fetchUserData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://panorbit.in/api/users.json");
      if (!response.ok) {
        throw new Error("Could Not fetch Cart!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const userData = await fetchData();
      dispatch(userActions.setUserData(userData.users));
    } catch (err) {
      console.log(err);
    }
  };
};
