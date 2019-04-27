import http from 'http';
import app from './app';
import logger from 'logger';
import { environment } from '../environment';

const server = http.createServer(app);
const log = logger.createLogger();
server.listen(environment.port, ()=>{
	log.info('listening');
});

