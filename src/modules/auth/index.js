import express from 'express';
import passport from 'passport/lib';
import AuthController from './authController';


const router = express.Router();

router.get(
	'/auth/login/google',
	passport.authenticate('google', {scope: ['email', 'profile']}),
);

router.get(
	'/auth/google/callback',
	passport.authenticate('google'),
	AuthController.socialAuth,
);

router.get(
	'/auth/login/facebook',
	passport.authorize(
		'facebook',
		{scope: ['email']}
	)
);

router.get(
	'/auth/facebook/callback',
	passport.authenticate('facebook'),
	AuthController.socialAuth
);

export default router;