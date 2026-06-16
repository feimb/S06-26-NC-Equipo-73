import { Router } from 'express';
import type { AppContainer } from '../container.js';

export const createHealthRoutes = (container: AppContainer) => {
    const router = Router();

/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Verifica el estado del backend
 *     operationId: getHealth
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Backend operativo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - status
 *                 - uptime
 *                 - timestamp
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 uptime:
 *                   type: number
 *                   example: 12.34
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
    router.get('/', container.healthController.getHealth);

    return router;
};
