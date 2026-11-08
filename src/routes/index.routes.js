import { Router } from 'express';
import userRoutes from './user.routes.js';
import taskRoutes from './task.routes.js'; // 1. Importa las rutas de tu entidad Task

const router = Router();

// Rutas del recurso Users
router.use('/api/users', userRoutes);

// Rutas del recurso Tasks
router.use('/api/tasks', taskRoutes); // 2. Monta las rutas bajo el prefijo /api/tasks

export default router;
