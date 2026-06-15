import { HealthController } from './controllers/health.controller.js';
import { HealthService } from './services/health.service.js';

const healthService = new HealthService();
const healthController = new HealthController(healthService);

export const container = {
    healthController,
};
