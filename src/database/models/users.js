'use strict';
module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
		username: DataTypes.STRING,
		email: DataTypes.STRING,
		profileId: DataTypes.STRING
	}, {});
	Users.associate = function() {
		// associations can be defined here
	};
	return Users;
};