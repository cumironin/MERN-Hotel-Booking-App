import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

export default router;

// import express from "express";
// import { testController } from "../controllers/user.controller.js ";

// const router = express.Router();

// router.get("/test", testController);

// export default router;
