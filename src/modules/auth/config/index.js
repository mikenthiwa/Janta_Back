import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import {environment} from '../../../environment';

module.exports = {
	googleStrategy: passport.use(new GoogleStrategy({
		clientID: environment.googleStrategy.clientID,
		clientSecret: environment.googleStrategy.clientSecret,
		callbackURL: `http://localhost:${environment.port}/auth/google/callback`
	},
	(accessToken, refreshToken, profile, cb) => {
		return cb(null, profile);
	}
	)),

	facebookStrategy: passport.use(new FacebookStrategy({
		clientID: environment.facebookStrategy.clientID,
		clientSecret: environment.facebookStrategy.clientSecret,
		callbackURL: `http://localhost:${environment.port}/auth/facebook/callback`,
		profileFields: ['id', 'emails', 'name']
	},
	(accessToken, refreshToken, profile, cb) => {
		return cb(null, profile);
	}
	))
};
