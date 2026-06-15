import { z } from 'zod';
import logger from './logger.js';

const envSchema = z.object({
    PORT: z.string().default('8080'),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const parseEnv = () => {
    try {
        return envSchema.parse(process.env);
    } catch (error) {
        logger.error('Variables de entorno faltantes:', error);
        process.exit(1);
    };
};

export const env = parseEnv();
