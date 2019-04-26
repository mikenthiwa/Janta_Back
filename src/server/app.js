import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('combined'));

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