export const fetchUser = () => {
  const userInfoString = localStorage.getItem("type");
  if (userInfoString) {
    const userInfo = userInfoString;
    return userInfo;
  }
};
