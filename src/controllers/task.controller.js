import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// 1. Obtener todos
export const getAll = async (req, res) => {
  const data = await prisma.task.findMany();
  res.json({ success: true, data });
};

// 2. Obtener por ID
export const getById = async (req, res) => {
  const { id } = req.params;
  const item = await prisma.task.findUnique({ where: { id: Number(id) } });
  if (!item) return res.status(404).json({ success: false, message: 'No encontrado' });
  res.json({ success: true, data: item });
};

// 3. Crear
export const create = async (req, res) => {
  const nuevo = await prisma.task.create({ data: req.body });
  res.status(201).json({ success: true, data: nuevo });
};

// 4. Actualizar
export const update = async (req, res) => {
  const { id } = req.params;
  const modificado = await prisma.task.update({ where: { id: Number(id) }, data: req.body });
  res.json({ success: true, data: modificado });
};

// 5. Eliminar
export const remove = async (req, res) => {
  const { id } = req.params;
  await prisma.task.delete({ where: { id: Number(id) } });
  res.json({ success: true, message: 'Eliminado correctamente' });
};
