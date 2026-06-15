import { Router } from 'express';
import { container } from '../container.js';

const router = Router();

/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Verifica el estado del backend
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Backend operativo
 */
router.get('/', container.healthController.getHealth);

export default router;
