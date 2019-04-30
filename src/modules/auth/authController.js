import models from '../../database/models';
import jwt from 'jsonwebtoken';
import {environment} from '../../environment';


class AuthController {
	static socialAuth (req, res) {
	  try {
			const {sub, id, name, email} = req.user._json;
			const payload = {email: email};
			models.Users.findOrCreate(
			  {where:
          {profileId: sub || id},
				defaults: {username: name, email: email}});
			const token = jwt.sign(payload, environment.appSecret);
			res.status(201).send({
				success: 'True',
				message: 'You have successfully Sign up!',
				token: `${token}`
			});

		}catch (e){
	    res.status(500).send({
				success: false,
				message: 'Something happened!'
			});
		}
	}
}

export default AuthController;

