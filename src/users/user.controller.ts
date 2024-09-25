
import { Context } from 'hono';
import {usersService, getusersService, createusersService, updateusersService, deleteusersService } from './user.services';

// List all users
export const listusers = async (c: Context): Promise<Response> => {
  const users = await usersService();
  return c.json(users);
};

// Get a single user by ID
export const getusers = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const user = await getusersService(id);
  if (user) {
    return c.json(user);
  }
  return c.json({ message: 'User not found' }, 404);
};

// Create a new user
export const createusers = async (c: Context): Promise<Response> => {
  const userData = await c.req.json();
  const user = await createusersService(userData);
  return c.json(user, 201);
};

// Update a user
export const updateusers = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const userData = await c.req.json();
  const message = await updateusersService(id, userData);
  return c.json({ message });
};

// Delete a user
export const deleteusers = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const message = await deleteusersService(id);
  return c.json({ message });
};
