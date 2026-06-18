import { Router } from 'express';
import type { AppContainer } from '../container.js';

export const createDataRoutes = (container: AppContainer) => {
    const router = Router();

    /**
     * @openapi
     * /api/datos:
     *   post:
     *     summary: Consulta datos mediante lenguaje natural y filtros
     *     operationId: queryData
     *     tags:
     *       - Datos
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/DataRequest'
     *     responses:
     *       200:
     *         description: Resultado de la consulta
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/DataResponse'
     *       400:
     *         description: Solicitud inválida
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ValidationErrorResponse'
     */
    router.post('/', container.dataController.queryData);

    return router;
};
