const prisma = require('../db');

async function createUser(req, res) {
  try {
    const { email, name } = req.body;
    if (!email) return res.status(400).json({ error: 'email is required' });

    const user = await prisma.user.create({ data: { email, name } });
    res.status(201).json(user);
  } catch (err) {
    if (err.code === 'P2002') return res.status(409).json({ error: 'email already exists' });
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function listUsers(req, res) {
  try {
    const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserById(req, res) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: 'invalid id' });

    const user = await prisma.user.findUnique({ where: { id }, include: { tasks: true } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { createUser, listUsers, getUserById };