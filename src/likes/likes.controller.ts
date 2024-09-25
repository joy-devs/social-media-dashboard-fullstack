
import { Context } from 'hono';
import {likesService, getlikesService, createlikesService, updatelikesService, deletelikesService } from './likes.services';

// List all likes
export const listlikes = async (c: Context): Promise<Response> => {
  const likes = await likesService();
  return c.json(likes);
};

// Get a single like by ID
export const getlikes = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const like = await getlikesService(id);
  if (like) {
    return c.json(like);
  }
  return c.json({ message: 'Like not found' }, 404);
};

// Create a new like
export const createlikes = async (c: Context): Promise<Response> => {
  const userData = await c.req.json();
  const like = await createlikesService(userData);
  return c.json(like, 201);
};

// Update a like
export const updatelikes = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const likeData = await c.req.json();
  const message = await updatelikesService(id, likeData);
  return c.json({ message });
};

// Delete a like
export const deletelikes = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const message = await deletelikesService(id);
  return c.json({ message });
};
