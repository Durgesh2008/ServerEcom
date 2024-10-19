import { getAllUserController, refreshAccessToken } from './../controllers/userController';
import { Router } from 'express';
import { login, register } from '../controllers/userController';
import { verify } from 'crypto';
import { verifyJwt } from '../Middlewares/verifyJwt';
const router = Router();

router.post("/register",register)
router.post("/login",login)
router.put("/refreshAccessToken",refreshAccessToken)
router.get("/get-all",verifyJwt,getAllUserController)
export default router;