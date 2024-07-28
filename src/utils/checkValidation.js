export const checkValidation = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //const isNameValid = name.trim()?.length > 4;

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  //if (!isNameValid) return "Name is not valid";

  return null;
};
