/*
    Prefix: /modulab
*/

import { Router } from 'express';
import { testingEndPoint } from '../controllers/modulab';
const router = Router();

router.get( '/', testingEndPoint );

export default router;