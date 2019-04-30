import dotenv from 'dotenv';

dotenv.config();

export const environment = {
	port: process.env.PORT,
	appSecret: process.env.APP_SECRET,
	database: {
		postgres_url: process.env.DATABASE_URL,
		database_name: process.env.DATABASE_NAME,
		database_username: process.env.DATABASE_USERNAME,
		database_password: process.env.DATABASE_PASSWORD,
		test_database_name: process.env.TEST_DATABASE_NAME
	},
	googleStrategy: {
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET
	},
	facebookStrategy: {
		clientID: process.env.FACEBOOK_CLIENT_ID,
		clientSecret: process.env.FACEBOOK_SECRET
	}
};


