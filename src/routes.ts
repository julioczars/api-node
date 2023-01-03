import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

router.post('/users/new', new CreateUserController().handle);

router.post('/users/login', new AuthController().handle);

router.get('/users/details', isAuthenticated, new DetailUserController().handle);

export {router};

