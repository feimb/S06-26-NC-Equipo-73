import 'dotenv/config';
import app from './app.js';
import logger from './config/logger.js';

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    logger.info(`Servidor corriendo en el puerto: ${PORT}`);
});

server.on('error', (error) => {
    logger.error(`Error al iniciar el servidor: ${error}`);
});

server.on('close', () => {
    logger.info('Se ha cerrado el servidor');
});

process.on('SIGINT', () => {
    server.close();
});

process.on('SIGTERM', () => {
    server.close();
});

export default server;