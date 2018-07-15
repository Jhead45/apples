import { Router } from 'express';
import meetingRouter from './meeting';
import profilesRouter from './profiles';
import authRouter from './auth';
import usersRouter from './users';
import suggestionsRouter from './suggestions';
// import stripeDonationsRouter from './stripeDonations';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);
// router.use('/donate', stripeDonationsRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/meeting', meetingRouter);
router.use('/profiles', profilesRouter);
router.use('/users', usersRouter);
router.use('/suggestions', suggestionsRouter);


export default router;