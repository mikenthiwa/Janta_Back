import {environment} from '../src/environment';

module.exports = {
	development: {
		use_env_variable: 'DATABASE_URL',
		username: environment.database.database_username,
		database: environment.database.database_name,
		password: environment.database.database_password,
		host: '127.0.0.1',
		dialect: 'postgres'
	},
	test: {
		username: environment.database.database_username,
		password: environment.database.database_password,
		database: environment.database.test_database_name,
		host: '127.0.0.1',
		dialect: 'postgres'
	},
	production: {
		username: 'root',
		password: null,
		database: 'database_production',
		host: '127.0.0.1',
		dialect: 'postgres'
	}
};
