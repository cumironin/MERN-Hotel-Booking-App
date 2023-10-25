export const errorHandler = (statuscCode, message) => {
  const error = new Error();
  error.statuscCode = statuscCode;
  error.message = message;
  return error;
};
