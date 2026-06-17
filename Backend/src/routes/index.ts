import { Router } from 'express';
import type { AppContainer } from '../container.js';
import { createDataRoutes } from './data.routes.js';
import { createHealthRoutes } from './health.routes.js';
import { createMapRoutes } from './map.routes.js';

export const createRoutes = (container: AppContainer) => {
    const router = Router();

    router.use('/health', createHealthRoutes(container));
    router.use('/datos', createDataRoutes(container));
    router.use('/mapa', createMapRoutes(container));

    return router;
};
