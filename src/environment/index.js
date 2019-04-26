import dotenv from 'dotenv';

dotenv.config();

export const environment = {
	port: process.env.PORT,
	database: {
		postgres_url: process.env.DATABASE_URL,
		database_name: process.env.DATABASE_NAME,
		database_username: process.env.DATABASE_USERNAME,
		database_password: process.env.DATABASE_PASSWORD,
		test_database_name: process.env.TEST_DATABASE_NAME
	}
};


