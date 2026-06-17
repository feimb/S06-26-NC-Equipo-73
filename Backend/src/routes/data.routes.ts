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
     *             type: object
     *             required: [consulta, filtros, idioma]
     *             properties:
     *               consulta:
     *                 type: string
     *               filtros:
     *                 type: object
     *                 required: [region, indicador]
     *                 properties:
     *                   region:
     *                     type: string
     *                   indicador:
     *                     type: string
     *               idioma:
     *                 type: string
     *     responses:
     *       200:
     *         description: Resultado de la consulta
     *       400:
     *         description: Solicitud inválida
     */
    router.post('/', container.dataController.queryData);

    return router;
};
