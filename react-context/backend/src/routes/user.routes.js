import { Router } from "express";
import {loginUserCtrl} from "../controllers/users.controllers.js"

const router = Router()

router.post("/login-users", loginUserCtrl)

export {router}