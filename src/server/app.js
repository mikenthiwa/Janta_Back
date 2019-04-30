import express from 'express';
import morgan from 'morgan';
import passport from 'passport';
import authConfig from '../modules/auth/config';
import authRouter from '../modules/auth';


authConfig.googleStrategy;

passport.serializeUser((user, cb) => {
	cb(null, user);
});

passport.deserializeUser((user, cb) => {
	cb(null, user);
});


const app = express();
app.use(morgan('combined'));
app.use(passport.initialize());
app.use(passport.session());
app.use(authRouter);

app.get('/', (req, res) => {
	res.status(200).json({
		success: true,
		message: 'Welcome to homepage'
	});
});

app.get('*', (req, res) => {
	res.status(200).json({
		success: true,
		message: 'The route you provided does not exist'
	});
});

export default app;