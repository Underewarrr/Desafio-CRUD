

import App from './app';
import 'dotenv/config';

const PORT = process.env.BACKEND_PORT || 3001;

new App().start(PORT);