import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "bhai mehnat lagi hai yaha tak aane me",
  });
});

export { registerUser };
