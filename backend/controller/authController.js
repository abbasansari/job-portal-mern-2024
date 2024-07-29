export const signUpController = (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};
