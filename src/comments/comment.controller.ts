
import { Context } from 'hono';
import {commentsService, getcommentsService, createcommentsService, updatecommentsService, deletecommentsService } from './comment.services';

// List all comments
export const listcomments = async (c: Context): Promise<Response> => {
  const comments = await commentsService();
  return c.json(comments);
};

// Get a comment user by ID
export const getcomments = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const comment = await getcommentsService(id);
  if (comment) {
    return c.json(comment);
  }
  return c.json({ message: 'Book not found' }, 404);
};

// Create a new comment
export const createcomments = async (c: Context): Promise<Response> => {
  const commentData = await c.req.json();
  const comment = await createcommentsService(commentData);
  return c.json(comment, 201);
};

// Update a comment
export const updatecomments = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const commentData = await c.req.json();
  const message = await updatecommentsService(id, commentData);
  return c.json({ message });
};

// Delete a comment
export const deletecomments = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const message = await deletecommentsService(id);
  return c.json({ message });
};
